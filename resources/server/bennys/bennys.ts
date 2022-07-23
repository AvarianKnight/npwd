import { ox, PMA } from '../server';
import { BennysEvents, Vehicle } from './../../../typings/bennys';

onNet(BennysEvents.GET_VEHICLE_LIST, () => {
  const player = PMA.getPlayerFromId(source);

  // eslint-disable-next-line prefer-const
  let vehicleList: Vehicle[] = [];
  ox.query(
    `SELECT plate, state, vehicle, police_lock FROM owned_vehicles WHERE uniqueId = ?`,
    [player.uniqueId],
    (results: any) => {
      results.forEach((veh: any) => {
        const model = JSON.parse(veh.vehicle).model;
        const obj: Vehicle = {
          plate: veh.plate,
          state: veh.state,
          model: model,
          police_lock: veh.police_lock,
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
    ox.execute(`UPDATE owned_vehicles SET state = 0 WHERE plate = ?`, [vehicle.plate], () => {
      player.removeAccountMoney('bank', vehicle.impoundFee);
      player.triggerEvent(BennysEvents.FREE_VEHICLE);
    });
  } else {
    player.triggerEvent(BennysEvents.FAIL_IMPOUND);
  }
});
