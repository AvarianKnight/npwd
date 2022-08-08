import { Route, Switch } from 'react-router-dom';
import { useApp } from '../../../os/apps/hooks/useApps';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import { AppTitle } from '../../../ui/components/AppTitle';
import { useProperty } from '../hooks/useProperty';
import Container from './Container';
import Home from './Home';
import HomeImg from './HomeImg';
import PropertyTitle from './PropertyTitle';

const PropertyApp = () => {
  useProperty();

  return (
    <AppWrapper id="property-app">
      <PropertyTitle />
      <AppContent>
        <Container>
          <HomeImg />
          <Switch>
            <Route path="/property" exact component={Home} />
          </Switch>
        </Container>
      </AppContent>
    </AppWrapper>
  );
};

export default PropertyApp;
