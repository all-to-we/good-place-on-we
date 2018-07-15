import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class RouteAboutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        About
      </div>
    );
  }
}
const RouteAbout = connect()(RouteAboutContainer);
export default RouteAbout;