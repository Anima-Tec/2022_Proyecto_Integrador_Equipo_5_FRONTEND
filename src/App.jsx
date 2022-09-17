import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import ROUTES from './routes/routes';
import Home from './pages/Home';
import NuestraPropuesta from './pages/NuestraPropuesta';
import Practicantes from './pages/Practicantes';
import Empresas from './pages/Empresas';
import QuienesSomos from './pages/QuienesSomos';
import Apoyanos from './pages/Apoyanos';
import Login from './pages/Login';

import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.nuestrapropuesta} element={<NuestraPropuesta />} />
        <Route path={ROUTES.practicantes} element={<Practicantes />} />
        <Route path={ROUTES.empresas} element={<Empresas />} />
        <Route path={ROUTES.quienesomos} element={<QuienesSomos />} />
        <Route path={ROUTES.apoyanos} element={<Apoyanos />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
        <Route path={ROUTES.register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
