import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const LayoutFooter = ({routes}) => {
  return (
    <div className='footer'>
      {routes ? routes.map(
        (route, i) => (
          <li className="footer-item" key={i}>
            <Link to={route.path}>{route.name}</Link>
          </li>
          )
        ) : ''}
    </div>
  )
};

export default LayoutFooter