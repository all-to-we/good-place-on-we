import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { authSuccess } from "../reducer/auth/auth.actions";

class RouteLoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.login}>Login Here!</button>
    );
  }
}
const RouteLogin = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess());
    dispatch(push('/about'));
  }
}))(RouteLoginContainer);
export default RouteLogin;