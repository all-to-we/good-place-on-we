import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
  Route,
  Switch,
} from "react-router-dom";
import LayoutHeader from "./layout/header";
import LayoutFooter from "./layout/footer";
import RouteIndex from "./router";
import RouteNotFind from "./router/notFind";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <header>
          <LayoutHeader />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={RouteIndex}/>
            <Route component={RouteNotFind} />
          </Switch>
        </div>
        <footer>
          <LayoutFooter />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp

