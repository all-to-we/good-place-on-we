import React from "react";
import PropTypes from 'prop-types'
import { toggleSideBar } from "../reducer/layout/layout.actions";
import { connect } from "react-redux";

const LayoutHeaderContainer = ({toggle}) => {
  return (
    <div className="header">
      <div className="header-menu" onClick={toggle}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  )
};

const LayoutHeader = connect(null, dispatch => ({
  toggle: () => {
    dispatch(toggleSideBar());
  }
}))(LayoutHeaderContainer);
export default LayoutHeader;