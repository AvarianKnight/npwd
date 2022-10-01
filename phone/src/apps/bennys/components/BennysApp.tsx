import { Switch, Route } from 'react-router-dom';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import BennysTitle from './BennysTitle';
import Home from './home/Home';
import BG from '../../../assets/bennys/bennys_bg.png';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { BennysEvents } from '../../../../../typings/bennys';
import { useNuiRequest } from 'fivem-nui-react-lib';
import InjectDebugData from '../../../os/debug/InjectDebugData';

const Content = styled.div`
  top: 80px;
  position: relative;
  margin: 10px;
  height: 515px;
  overflow: auto;
  border-radius: 10px;
  box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
`;

const BennysApp = () => {
  const { send } = useNuiRequest();

  useEffect(() => {
    send(BennysEvents.GET_VEHICLE_LIST);
  }, [send]);

  return (
    <AppWrapper
      id="bennys-app"
      style={{
        background: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'absolute',
      }}
    >
      <BennysTitle />
      <Content>
        <AppContent style={{ height: '100%' }}>
          <Switch>
            <Route path="/bennys" exact component={Home} />
          </Switch>
        </AppContent>
      </Content>
    </AppWrapper>
  );
};

InjectDebugData(
  [
    {
      app: 'BENNYS',
      method: BennysEvents.GET_VEHICLE_LIST,
      data: {
        vehicleList: [
          {
            id: 1,
            plate: 'TEST',
            state: 0,
            model: 'TEST1',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
          {
            id: 2,
            plate: 'TEST2',
            state: 0,
            model: 'TEST3',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
          {
            id: 3,
            plate: 'TEST',
            state: 0,
            model: 'TEST1',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
          {
            id: 4,
            plate: 'TEST2',
            state: 0,
            model: 'TEST3',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
          {
            id: 5,
            plate: 'TEST',
            state: 0,
            model: 'TEST1',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
          {
            id: 6,
            plate: 'TEST2',
            state: 0,
            model: 'TEST3',
            police_lock: 0,
            fuel: 100,
            body_health: 1000,
            engine_health: 1000,
          },
        ],
        impound: {
          regularFee: 5000,
          policeFee: 12000,
        },
      },
    },
  ],
  500,
);

export default BennysApp;
