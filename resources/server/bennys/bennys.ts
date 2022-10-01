import { AC, ox, PMA } from '../server';
import { BennysEvents, Vehicle } from './../../../typings/bennys';

onNet(BennysEvents.GET_VEHICLE_LIST, () => {
  const player = PMA.getPlayerFromId(source);

  // eslint-disable-next-line prefer-const
  let vehicleList: Vehicle[] = [];
  ox.query(
    `SELECT id, plate, state, vehicle, police_lock, body_health, engine_health, fuel FROM owned_vehicles WHERE uniqueId = ?`,
    [player.uniqueId],
    (results: any) => {
      results.forEach((veh: any) => {
        const model = JSON.parse(veh.vehicle).model;
        const obj: Vehicle = {
          id: veh.id,
          plate: veh.plate,
          state: veh.state,
          model: model,
          police_lock: veh.police_lock,
          fuel: veh.fuel,
          body_health: veh.body_health,
          engine_health: veh.engine_health,
        };
        vehicleList.push(obj);
      });
      player.triggerEvent(BennysEvents.GET_VEHICLE_LIST, vehicleList);
    },
  );
});

onNet(BennysEvents.FREE_VEHICLE, (vehicle: Vehicle) => {
  const player = PMA.getPlayerFromId(source);

  if (vehicle.impoundFee <= player.getAccount('bank').quantity) {
    ox.execute(`UPDATE owned_vehicles SET state = 0 WHERE id = ?`, [vehicle.id], () => {
      player.removeAccountMoney('bank', vehicle.impoundFee);
      player.triggerEvent(BennysEvents.FREE_VEHICLE);
    });
  } else {
    player.triggerEvent(BennysEvents.FAIL_IMPOUND);
  }
});

/**
 * Vehicles you no longer want can now be removed entirely with a click of a button!
 */
onNet(BennysEvents.ABANDON_VEHICLE, (vehicle: Vehicle) => {
  const player = PMA.getPlayerFromId(source);

  if (vehicle) {
    ox.execute('DELETE FROM owned_vehicles WHERE id = ?', [vehicle.id], () => {
      player.triggerEvent(BennysEvents.ABANDON_SUCCESS);
      AC.log(
        '*Vehicle Abandoned*',
        `Overhead: ${GetPlayerName(
          player.source,
        )}\nCharacter: ${player.getPlayerName()}\n\n **Abandoned a vehicle with this information.** 
        Plate: ${vehicle.plate}
        Model: ${vehicle.model}
        ID: ${vehicle.id}`,
        `blue`,
        `abandonVehicleLogs`,
      );
    });
  } else {
    player.triggerEvent(BennysEvents.ABANDON_FAIL);
  }
});
