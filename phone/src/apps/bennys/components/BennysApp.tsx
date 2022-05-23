import { Switch, Route } from 'react-router-dom';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import BennysTitle from './BennysTitle';
import Home from './home/Home';
import BG from '../../../assets/bennys/bennys_bg.png';
import styled from 'styled-components';
import { useBennys } from '../hooks/useBennys';

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
  useBennys();

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

export default BennysApp;
