import React from "react";
import { connect } from "react-redux";
import { toggleSideBar } from "../reducer/layout/layout.actions";

const LayoutSidebarContainer = ({layout, toggle}) => {
  return (
    <div className={layout.show ? 'sidebar active' : 'sidebar'}>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">Menu</div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div className="sidebar-dim" onClick={toggle}></div>
    </div>
  )
};

const LayoutSidebar = connect((state) => {
  return {
    layout: state.layout
  }
}, dispatch => ({
  toggle: () => {
    dispatch(toggleSideBar());
  }
}))(LayoutSidebarContainer);
export default LayoutSidebar;