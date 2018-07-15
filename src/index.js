import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import {
  ConnectedRouter,
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import CombineReducers from "./reducer";
import App from "./app";
import Routes from "./router/routes";

import css from "./index.css";

const history = createHistory();
const store = createStore(CombineReducers, applyMiddleware(routerMiddleware(history)));
const wrapper = document.getElementById("container");
if ( wrapper ) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App routes={Routes} />
      </ConnectedRouter>
    </Provider>,
    wrapper
  );
}
