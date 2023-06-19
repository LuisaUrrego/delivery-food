import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRouter = ({ isAutentication }) => {
  return <div>{isAutentication ? <Navigate to="/home" /> : <Outlet />}</div>;
};

export default PublicRouter;