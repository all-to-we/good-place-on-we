import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { authFail } from "../reducer/auth/auth.actions";

class RouteLogOutContainer extends Component {
  render() {
    return (
      <button onClick={this.props.logout}>Logout</button>
    );
  }
}
const RouteLogOut = connect(null, dispatch => ({
  logout: () => {
    dispatch(authFail());
    dispatch(push('/'));
  }
}))(RouteLogOutContainer);
export default RouteLogOut;