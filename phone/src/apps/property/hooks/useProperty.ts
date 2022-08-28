import { useNuiEvent } from 'fivem-nui-react-lib';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { OwnedProperty } from './../../../../../typings/property';
import { PropertyState } from './../atoms/state';
import { usePropertyNotification } from './usePropertyNotification';

export const useProperty = () => {
  const history = useHistory();
  const setOwnedPropertyList = useSetRecoilState(PropertyState.ownedPropertyList);
  const setOwnedProperty = useSetRecoilState(PropertyState.selectedProperty);
  const { setNotification } = usePropertyNotification();

  const propertyHandler = (ownedProperties: OwnedProperty[]) => {
    setOwnedPropertyList(ownedProperties);
  };

  const propertySelector = (ownedProperty: OwnedProperty) => {
    if (!ownedProperty.owned) return;
    history.push('/property/info');
    setOwnedProperty(ownedProperty);
  };

  const homeButtonHandler = () => {
    history.push('/property');
  };

  useNuiEvent('PROPERTY', 'npwd:property:getOwnedProperties', propertyHandler);
  useNuiEvent('PROPERTY', 'npwd:property:alert', setNotification);

  return { propertySelector, homeButtonHandler };
};
