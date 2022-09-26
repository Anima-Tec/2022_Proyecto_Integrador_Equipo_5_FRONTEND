import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './config/routes';
import Apoyanos from '../pages/Apoyanos';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Empresas from '../pages/Empresas';
import Home from '../pages/Home';
import NuestraPropuesta from '../pages/NuestraPropuesta';
import Practicantes from '../pages/Practicantes';
import QuienesSomos from '../pages/QuienesSomos';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.nuestrapropuesta} element={<NuestraPropuesta />} />
      <Route path={ROUTES.practicantes} element={<Practicantes />} />
      <Route path={ROUTES.empresas} element={<Empresas />} />
      <Route path={ROUTES.quienesomos} element={<QuienesSomos />} />
      <Route path={ROUTES.apoyanos} element={<Apoyanos />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Register />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
