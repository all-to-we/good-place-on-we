import React from 'react';
import { Route } from 'react-router'

const SubRoutes = route => (
  <Route
    path={route.path}
    component={route.component}
  />
);

export default SubRoutes;