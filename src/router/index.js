import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class RouteIndexContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>index</div>
    );
  }
}
const RouteIndex = connect()(RouteIndexContainer);
export default RouteIndex;