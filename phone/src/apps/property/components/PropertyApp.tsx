import { Route, Switch } from 'react-router-dom';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import { useProperty } from '../hooks/useProperty';
import Container from './Container';
import Home from './Home';
import HomeImg from './HomeImg';
import PropertyInfo from './PropertyInfo';
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
            <Route path="/property/info" exact component={PropertyInfo} />
          </Switch>
        </Container>
      </AppContent>
    </AppWrapper>
  );
};

export default PropertyApp;
