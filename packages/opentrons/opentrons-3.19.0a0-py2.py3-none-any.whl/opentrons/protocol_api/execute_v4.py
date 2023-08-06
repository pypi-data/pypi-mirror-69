import logging
from typing import Any, Dict
from .contexts import ProtocolContext, \
    MagneticModuleContext, TemperatureModuleContext, ModuleContext, \
    ThermocyclerContext
from .execute_v3 import _delay, _move_to_slot
from .types import LoadedLabware, Instruments, PipetteHandler, \
    MagneticModuleHandler, TemperatureModuleHandler, \
    ThermocyclerModuleHandler
from .constants import JsonCommand

MODULE_LOG = logging.getLogger(__name__)

# Special string for slot used by thermocycler in JSON protocols.
TC_SPANNING_SLOT = 'span7_8_10_11'


def load_labware_from_json_defs(
        ctx: ProtocolContext,
        protocol: Dict[Any, Any],
        modules: Dict[str, ModuleContext]) -> LoadedLabware:
    protocol_labware = protocol['labware']
    definitions = protocol['labwareDefinitions']
    loaded_labware = {}

    for labware_id, props in protocol_labware.items():
        slot = props['slot']
        definition = definitions[props['definitionId']]
        label = props.get('displayName', None)
        if slot in modules:
            loaded_labware[labware_id] = \
                modules[slot].load_labware_from_definition(definition, label)
        else:
            loaded_labware[labware_id] = \
                ctx.load_labware_from_definition(definition, slot, label)

    return loaded_labware


def load_modules_from_json(
        ctx: ProtocolContext,
        protocol: Dict[Any, Any]) -> Dict[str, ModuleContext]:
    module_data = protocol['modules']
    modules_by_id = {}
    for module_id, props in module_data.items():
        model = props['model']
        slot = props['slot']
        if slot == TC_SPANNING_SLOT:
            instr = ctx.load_module(model)
        else:
            instr = ctx.load_module(model, slot)
        modules_by_id[module_id] = instr

    return modules_by_id


def _engage_magnet(module: MagneticModuleContext, params) -> None:
    engage_height = params['engageHeight']
    module.engage(height_from_base=engage_height)


def _disengage_magnet(module: MagneticModuleContext, params) -> None:
    module.disengage()


def _temperature_module_set_temp(module: TemperatureModuleContext,
                                 params) -> None:
    temperature = params['temperature']
    module.start_set_temperature(temperature)


def _temperature_module_deactivate(module: TemperatureModuleContext,
                                   params) -> None:
    module.deactivate()


def _temperature_module_await_temp(module: TemperatureModuleContext,
                                   params) -> None:
    temperature = params['temperature']
    module.await_temperature(temperature)


def _thermocycler_close_lid(module: ThermocyclerContext,
                            params) -> None:
    module.close_lid()


def _thermocycler_open_lid(module: ThermocyclerContext,
                           params) -> None:
    module.open_lid()


def _thermocycler_deactivate_block(module: ThermocyclerContext,
                                   params) -> None:
    module.deactivate_block()


def _thermocycler_deactivate_lid(module: ThermocyclerContext,
                                 params) -> None:
    module.deactivate_lid()


def _thermocycler_set_block_temperature(module: ThermocyclerContext,
                                        params) -> None:
    temperature = params['temperature']
    module.set_block_temperature(temperature)


def _thermocycler_set_lid_temperature(module: ThermocyclerContext,
                                      params) -> None:
    temperature = params['temperature']
    module.set_lid_temperature(temperature)


def _thermocycler_run_profile(module: ThermocyclerContext,
                              params) -> None:
    volume = params['volume']
    profile = [{
        'temperature': p['temperature'],
        'hold_time_seconds': p['holdTime']
    } for p in params['profile']]
    module.execute_profile(
        steps=profile,
        block_max_volume=volume,
        repetitions=1)


def assert_no_async_tc_behavior(commands) -> None:
    # awaiters[i] corresponds to setters[i]
    setters = [
        "thermocycler/setTargetBlockTemperature",
        "thermocycler/setTargetLidTemperature",
        "thermocycler/runProfile"]
    awaiters = [
        "thermocycler/awaitBlockTemperature",
        "thermocycler/awaitLidTemperature",
        "thermocycler/awaitProfileComplete"]

    command_types = [c['command'] for c in commands]

    first_command = command_types[0]
    if first_command in awaiters:
        raise RuntimeError(
            ("Unsupported behavior. Cannot {} as the " +
             "first command of a protocol")
            .format(first_command))

    last_command = command_types[-1]
    if last_command in setters:
        raise RuntimeError(
            ("Unsupported behavior. Cannot {} as the " +
             "last command of a protocol")
            .format(last_command))

    # [a, b, c, d] -> [a, b], [b, c], [c, d]
    for a, b in zip(command_types, command_types[1:]):
        #  a setter must be immediately followed
        # by its corresponding awaiter
        if a in setters:
            expected_awaiter = awaiters[setters.index(a)]
            if b != expected_awaiter:
                raise RuntimeError(
                    ("Unsupported behavior. {} must be immediately" +
                     "followed by {}")
                    .format(a, expected_awaiter))
        # an awaiter must be preceded by a setter
        elif b in awaiters:
            expected_setter = setters[awaiters.index(b)]
            raise RuntimeError(
                ("Unsupported behavior. {} must be immediately " +
                 "preceded by {}").format(b, expected_setter))


def assert_tc_commands_do_not_use_unimplemented_params(commands) -> None:
    # raise errors if commands include optional param keys that
    # the executor/api does not currently support
    unsupported_keys_by_command = {
        "thermocycler/setTargetBlockTemperature": ["volume"]
    }
    for c in commands:
        command_type = c['command']
        params = c['params']
        unsupported_keys = unsupported_keys_by_command.get(
            command_type, [])
        for k in unsupported_keys:
            if k in params:
                raise RuntimeError((
                    "{} does not support {} param. " +
                    "This may be implemented in a later version of " +
                    "the robot server").format(command_type, k))


def dispatch_json(context: ProtocolContext,
                  protocol_data: Dict[Any, Any],
                  instruments: Instruments,
                  loaded_labware: LoadedLabware,
                  modules: Dict[str, ModuleContext],
                  pipette_command_map: Dict[str, PipetteHandler],
                  magnetic_module_command_map:
                  Dict[str, MagneticModuleHandler],
                  temperature_module_command_map:
                  Dict[str, TemperatureModuleHandler],
                  thermocycler_module_command_map:
                  Dict[str, ThermocyclerModuleHandler]
                  ) -> None:
    commands = protocol_data['commands']

    assert_no_async_tc_behavior(commands)
    assert_tc_commands_do_not_use_unimplemented_params(commands)

    for command_item in commands:
        command_type = command_item['command']
        params = command_item['params']

        if command_type in pipette_command_map:
            pipette_command_map[command_type](
                instruments, loaded_labware, params)
        elif command_type in magnetic_module_command_map:
            handleMagnetCommand(
                params,
                modules,
                command_type,
                magnetic_module_command_map
            )
        elif command_type in temperature_module_command_map:
            handleTemperatureCommand(params,
                                     modules,
                                     command_type,
                                     temperature_module_command_map)
        elif command_type in thermocycler_module_command_map:
            handleThermocyclerCommand(params,
                                      modules,
                                      command_type,
                                      thermocycler_module_command_map)
        elif command_type == JsonCommand.delay.value:
            _delay(context, params)
        elif command_type == JsonCommand.moveToSlot.value:
            _move_to_slot(context, instruments, params)
        else:
            raise RuntimeError(
                "Unsupported command type {}".format(command_type))


def handleTemperatureCommand(params,
                             modules,
                             command_type,
                             temperature_module_command_map
                             ) -> None:
    module_id = params['module']
    module = modules[module_id]
    if isinstance(module, TemperatureModuleContext):
        temperature_module_command_map[command_type](
            module, params
        )
    else:
        raise RuntimeError(
            "Temperature Module does not match " +
            "TemperatureModuleContext interface"
        )


def handleThermocyclerCommand(params,
                              modules,
                              command_type,
                              thermocycler_module_command_map
                              ) -> None:
    module_id = params['module']
    module = modules[module_id]
    if isinstance(module, ThermocyclerContext):
        thermocycler_module_command_map[command_type](
            module, params
        )
    else:
        raise RuntimeError(
            "Thermocycler Module does not match ThermocyclerContext interface"
        )


def handleMagnetCommand(params,
                        modules,
                        command_type,
                        magnetic_module_command_map
                        ) -> None:
    module_id = params['module']
    module = modules[module_id]
    if isinstance(module, MagneticModuleContext):
        magnetic_module_command_map[command_type](
            module, params
        )
    else:
        raise RuntimeError(
            "Magnetic Module does not match MagneticModuleContext interface"
        )
