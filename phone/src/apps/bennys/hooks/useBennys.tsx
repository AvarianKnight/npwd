import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { BennysEvents, Impound, Vehicle } from '../../../../../typings/bennys';
import Bennys from '../../../os/apps/icons/material/app/BENNYS';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';
import { bennysState } from '../atoms/state';

export const useBennys = () => {
  const { send } = useNuiRequest();
  const [vehicleList, setVehicleList] = useRecoilState<Vehicle[]>(bennysState.vehicles);
  const [showNotify, setShowNotify] = useRecoilState(bennysState.showNotify);
  const [filteredVehicleList, setFilteredVehicleList] = useState([]);
  const { addAlert } = useSnackbar();
  const [impoundFee, setImpoundFees] = useRecoilState(bennysState.impound);
  const [vehicleSelected, setVehicleSelected] = useRecoilState(bennysState.vehicleSelected);

  useEffect(() => {
    send(BennysEvents.GET_VEHICLE_LIST);
  }, [send]);

  const filterVehicleList = (input: string) => {
    let copyVehList = [...filteredVehicleList];
    copyVehList = copyVehList.filter((veh: Vehicle) =>
      veh.plate.toLowerCase().includes(input.toLowerCase()),
    );
    setVehicleList(copyVehList);
  };

  /**
   *
   * @param data.vehicleList
   * @param data.impound
   */
  const fetchedVehicleList = (data: any) => {
    const vehicleList: Vehicle[] = data.vehicleList;
    const impound: Impound = data.impound;

    setVehicleList(vehicleList);
    setFilteredVehicleList(vehicleList);
    setImpoundFees(impound);
  };

  const notifyFreeVehicle = () => {
    addAlert({
      message: 'Vehicle Freed!',
      type: 'success',
    });
  };

  const payImpound = (index: number) => {
    setShowNotify(true);
    const vehicle: Vehicle = vehicleList[index];
    let fee;

    if (vehicle.state === 2) {
      fee = impoundFee.regularFee;
    } else if (vehicle.state === 4) {
      fee = impoundFee.policeFee;
    }

    setVehicleSelected({
      plate: vehicle.plate,
      model: vehicle.model,
      state: vehicle.state,
      impoundFee: fee,
    });
  };

  const acceptImpoundHandler = () => {
    setShowNotify(false);
    send(BennysEvents.FREE_VEHICLE, vehicleSelected);
  };

  const failImpound = () => {
    setShowNotify(false);
    addAlert({
      message: 'You do not have enough money.',
      type: 'error',
    });
  };

  useNuiEvent('BENNYS', BennysEvents.GET_VEHICLE_LIST, fetchedVehicleList);
  useNuiEvent('BENNYS', BennysEvents.FREE_VEHICLE, notifyFreeVehicle);
  useNuiEvent('BENNYS', BennysEvents.FAIL_IMPOUND, failImpound);

  return {
    vehicleList,
    filterVehicleList,
    payImpound,
    setShowNotify,
    showNotify,
    acceptImpoundHandler,
  };
};
