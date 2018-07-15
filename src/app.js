import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';

import appCss from './style.scss'
import LayoutHeader from "./layout/header";
import LayoutFooter from "./layout/footer";

import RouteNotFound from "./router/notFound";
import SubRoutes from "./router/subRouter";


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routes } = this.props;
    return (
      <div className="app">
        <header className="app-header">
          <LayoutHeader />
        </header>
        <div className="app-body">
          <div>
            <Switch>
              {routes ?
                routes.map((route, i) => <SubRoutes key={i} {...route} />)
                : ''}
              <Route component={RouteNotFound} />
              {/*<PrivateRoute exact path="/" component={ConnectedApp}/>*/}
            </Switch>
          </div>
        </div>
        <footer className="app-footer">
          <LayoutFooter routes={routes} />
        </footer>
      </div>
    );
  }
}

export default App

