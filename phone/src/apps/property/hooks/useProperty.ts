import { PropertyState } from './../atoms/state';
import { OwnedProperty } from './../../../../../typings/property';
import { useNuiEvent, useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect } from 'react';
import { useSnackbar } from '../../../os/snackbar/hooks/useSnackbar';
import { useSetRecoilState } from 'recoil';

export const useProperty = () => {
  const setProperty = useSetRecoilState(PropertyState.property);
  const { addAlert } = useSnackbar();
  const { send } = useNuiRequest();

  useEffect(() => {
    send('npwd:sendOwnedPropertiesToPhone');
  }, []);

  const propertyHandler = (ownedProperties: OwnedProperty[]) => {
    setProperty(ownedProperties);

    // send('pma-property-manager:sendToPhone');
    // send(DarkMarketEvents.INIATE_TRADE, trade).then(() => {
    //     setNotifyDisplay(false);
    //     setTrade((state) => ({ ...state, playerId: '', amount: '' }));
    //   });
  };

  useNuiEvent('PROPERTY', 'npwd:getOwnedProperties', propertyHandler);
  //   useNuiEvent('DARKMARKET', DarkMarketEvents.SHOW_CRYPTO_UI, crypto.setCrypto);
  //   useNuiEvent('DARKMARKET', DarkMarketEvents.SEND_NOTIFICATION, setNotification);

  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_SUCCESS, alertSuccessHandler);
  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_FAILURE, alertFailHandler);
};
