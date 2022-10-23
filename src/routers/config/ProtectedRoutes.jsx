/* eslint-disable no-nested-ternary */
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import propTypes from 'prop-types';
import useAuth from '../../hooks/auth/useAuth';

type ProtectedRouteType = {
  roleRequired?: "Student" | "Company",
};

export default function ProtectedRoutes({ roleRequired }: ProtectedRouteType) {
  const auth = useAuth();

  if (roleRequired) {
    return auth.isAuthenticated ? (
      roleRequired === auth.user.role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  }
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

ProtectedRoutes.propTypes = {
  roleRequired: propTypes.string,
};

ProtectedRoutes.defaultProps = {
  roleRequired: null,
};
