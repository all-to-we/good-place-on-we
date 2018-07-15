import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class RouteNotFoundContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        NotFound
      </div>
    );
  }
}

const RouteNotFound = connect()(RouteNotFoundContainer);
export default RouteNotFound;