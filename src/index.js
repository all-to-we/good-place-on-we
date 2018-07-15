import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from "redux";

import indexCss from "./index.css";

import CombineReducers from "./reducer";
import {FirebaseSetting, getGoodocTeams} from "./setting/firebase.config";

import ConnectedApp from "./app";

const wrapper = document.getElementById("container");

const store = createStore(CombineReducers);
if ( wrapper ) {
  FirebaseSetting();
  ReactDOM.render(
  <Provider store={store}><ConnectedApp /></Provider>,
  wrapper
);
}
