import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

class PrivateRouteContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
            )
        }
      />
    )
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRouteContainer);
export default PrivateRoute;