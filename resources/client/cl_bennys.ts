import { BennysEvents, Vehicle } from './../../typings/bennys';

RegisterNuiCallbackType(BennysEvents.GET_VEHICLE_LIST);
RegisterNuiCallbackType(BennysEvents.FREE_VEHICLE);

on(`__cfx_nui:${BennysEvents.GET_VEHICLE_LIST}`, (data: any, cb: any) => {
  emitNet(BennysEvents.GET_VEHICLE_LIST);
  cb({});
});

on(`__cfx_nui:${BennysEvents.FREE_VEHICLE}`, (data: Vehicle, cb: any) => {
  emitNet(BennysEvents.FREE_VEHICLE, data);
  cb({});
});

onNet(BennysEvents.GET_VEHICLE_LIST, (vehicleList: Vehicle[]) => {
  vehicleList.map((veh: Vehicle) => (veh.model = GetDisplayNameFromVehicleModel(veh.model)));
  SendNUIMessage({
    app: 'BENNYS',
    method: BennysEvents.GET_VEHICLE_LIST,
    data: {
      vehicleList: vehicleList,
      impound: {
        regularFee: 5000,
        policeFee: 12000,
      },
    },
  });
});

onNet(BennysEvents.FREE_VEHICLE, () => {
  SendNUIMessage({
    app: 'BENNYS',
    method: BennysEvents.FREE_VEHICLE,
  });
  emitNet(BennysEvents.GET_VEHICLE_LIST);
});

onNet(BennysEvents.FAIL_IMPOUND, () => {
  SendNUIMessage({
    app: 'BENNYS',
    method: BennysEvents.FAIL_IMPOUND,
  });
});
