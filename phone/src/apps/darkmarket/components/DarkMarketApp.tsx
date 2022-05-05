import { Route, Switch } from 'react-router-dom';
import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import { useDarkMarketService } from '../hooks/useDarkMarketService';
import Cart from './cart/Cart';
import { Checkout } from './checkout/Checkout';
import DarkMarketTitle from './DarkMarketTItle';
import Home from './home/Home';
import Trade from './trade/Trade';

const DarkMarketApp = () => {
  useDarkMarketService();

  return (
    <AppWrapper id="darkmarket-app">
      <DarkMarketTitle />
      <Checkout />
      <AppContent>
        <Switch>
          <Route path="/darkmarket" exact component={Home} />
          <Route path="/darkmarket/trade" exact component={Trade} />
          <Route path="/darkmarket/cart" exact component={Cart} />
        </Switch>
      </AppContent>
    </AppWrapper>
  );
};

export default DarkMarketApp;
