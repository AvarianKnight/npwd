import { DropdownState, hoverState } from './../atoms/state';
import { useNuiRequest } from 'fivem-nui-react-lib';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Vehicle } from '../../../../../typings/bennys';
import { AnchorState, VehicleState } from '../atoms/state';
import { usePrompt } from './usePrompt';

export const useDropDown = () => {
  const [vehicle, setVehicle] = useRecoilState<Vehicle>(VehicleState.vehicle);
  const [dropdown, setDropdown] = useRecoilState(DropdownState.dropdown);
  const { setPrompt } = usePrompt();

  const handleClose = () => {
    setVehicle(null);
  };

  const handleAbandon = () => {
    setDropdown(false);
    setPrompt({
      open: true,
      message: 'If you press agree, this vehicle will be permanently removed.',
    });
  };

  const rightClick = (event: React.MouseEvent, veh: Vehicle) => {
    setDropdown(true);
    setVehicle(veh);
  };

  return { handleClose, handleAbandon, rightClick, dropdown };
};
