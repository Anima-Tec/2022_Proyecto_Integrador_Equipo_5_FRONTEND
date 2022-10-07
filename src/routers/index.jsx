import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './config/routes';
import Apoyanos from '../pages/public/Apoyanos';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/public/Home';

import InfoEmpresas from '../pages/public/InfoEmpresas';
import NuestraPropuesta from '../pages/public/NuestraPropuesta';
import NotFound from '../pages/NotFound';
import InfoPracticantes from '../pages/public/InfoPracticantes';
import QuienesSomos from '../pages/public/QuienesSomos';
import PracticasEmpresas from '../pages/company/PracticasEmpresas';
import Practicantes from '../pages/company/Practicantes';
import MisOfertas from '../pages/company/MisOfertas';

import EstadoInscripcion from '../pages/student/EstadoInscripcion';
import PracticasPracticantes from '../pages/student/PracticasPracticantes';
import OfertasTrabajo from '../pages/student/OfertasTrabajo';
import MisPostulaciones from '../pages/student/MisPostulaciones';
import Empresas from '../pages/student/Empresas';
import Recursos from '../pages/student/Recursos';
import PerfilEmpresa from '../pages/student/PerfilEmpresa';

export default function AppRoutes() {
  return (
    <Routes>
      {/* auth pages */}
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.register} element={<Register />} />

      {/* public pages */}
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.nuestrapropuesta} element={<NuestraPropuesta />} />
      <Route path={ROUTES.infoPracticas} element={<InfoPracticantes />} />
      <Route path={ROUTES.infoPracticantes} element={<InfoPracticantes />} />
      <Route path={ROUTES.infoEmpresas} element={<InfoEmpresas />} />
      <Route path={ROUTES.quienesomos} element={<QuienesSomos />} />
      <Route path={ROUTES.apoyanos} element={<Apoyanos />} />

      {/* private pages */}
      <Route path={ROUTES.perfil} element={<Apoyanos />} />

      {/* student pages */}
      <Route path={ROUTES.estadoInscripcion} element={<EstadoInscripcion />} />
      <Route path={ROUTES.misPostulaciones} element={<MisPostulaciones />} />
      <Route path={ROUTES.ofertasTrabajo} element={<OfertasTrabajo />} />
      <Route path={ROUTES.empresas} element={<Empresas />} />
      <Route path={ROUTES.practicasPracticantes} element={<PracticasPracticantes />} />
      <Route path={ROUTES.recursos} element={<Recursos />} />

      <Route path={ROUTES.perfilEmpresa} element={<PerfilEmpresa />} />

      {/* company pages */}
      <Route path={ROUTES.misOfertas} element={<MisOfertas />} />
      <Route path={ROUTES.practicantes} element={<Practicantes />} />
      <Route path={ROUTES.practicasEmpresas} element={<PracticasEmpresas />} />

      {/* not found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
