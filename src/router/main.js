import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class RouteMainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}
const RouteMain = connect()(RouteMainContainer);
export default RouteMain;