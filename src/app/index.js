import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {
  Products,
  PageNotFound,
  Cart,
  Favorites,
  SingleProduct
} from "./pages";
import { Layout, BackgroundContextProvider, ShopProvider } from "./components";
import { ROUTES } from "../constants";

function App() {
  return (
    <ShopProvider>
      <BackgroundContextProvider value="pink">
        <Router>
          <Layout>
            <Switch>
              <Route path={ROUTES.defaultPage} exact component={Products} />
              <Route path={ROUTES.cart} exact component={Cart} />
              <Route path={ROUTES.favorites} exact component={Favorites} />
              <Route path={ROUTES.product} exact component={SingleProduct} />
              <Redirect exact from={ROUTES.home} to={ROUTES.defaultPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Layout>
        </Router>
      </BackgroundContextProvider>
    </ShopProvider>
  );
}

export default App;
