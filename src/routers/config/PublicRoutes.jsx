import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

export default function PublicRoutes() {
  const auth = useAuth();
  return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
