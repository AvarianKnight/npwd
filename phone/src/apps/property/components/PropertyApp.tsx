import { useNuiRequest } from 'fivem-nui-react-lib';
import { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropertyEvents } from '../../../../../typings/property';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import Container from './Container';
import Home from './Home';
import HomeImg from './HomeImg';
import KeyList from './KeyList';
import Prompt from './Prompt';
import PropertyInfo from './PropertyInfo';
import PropertyTitle from './PropertyTitle';

const PropertyApp = () => {
  const { send } = useNuiRequest();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    send(PropertyEvents.FETCH_OWNED_PROPERTIES);
  }, [send]);

  return (
    <AppWrapper id="property-app">
      <PropertyTitle />
      <AppContent>
        <Container rootRef={rootRef}>
          <Prompt rootRef={rootRef} />
          <HomeImg />
          <Switch>
            <Route path="/property" exact component={Home} />
            <Route path="/property/info" exact component={PropertyInfo} />
            <Route path="/property/keylist" exact component={KeyList} />
          </Switch>
        </Container>
      </AppContent>
    </AppWrapper>
  );
};

export default PropertyApp;
