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
      <div className="header-logo">
        Good place to We
      </div>
      <div className="header-user-profile">
        <i className="fas fa-user-circle"></i>
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