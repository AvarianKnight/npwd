import { useHistory } from 'react-router-dom';
import { PropertyState, SelectedPropertyState } from './../atoms/state';
import { OwnedProperty } from './../../../../../typings/property';
import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';
import { useSetRecoilState } from 'recoil';

export const useProperty = () => {
  const history = useHistory();
  const setOwnedPropertyList = useSetRecoilState(PropertyState.ownedPropertyList);
  const setOwnedProperty = useSetRecoilState(SelectedPropertyState.selectedProperty);

  const { addAlert } = useSnackbar();
  const { send } = useNuiRequest();

  const propertyHandler = (ownedProperties: OwnedProperty[]) => {
    setOwnedPropertyList(ownedProperties);
  };

  const propertySelector = (ownedProperty: OwnedProperty) => {
    history.push('/property/info');
    setOwnedProperty(ownedProperty);
  };

  const homeButtonHandler = () => {
    history.push('/property');
    // setOwnedProperty(undefined);
  };

  useNuiEvent('PROPERTY', 'npwd:property:getOwnedProperties', propertyHandler);

  return { propertySelector, homeButtonHandler };
};
