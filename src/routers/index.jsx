import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './config/routes';
import Apoyanos from '../pages/public/Apoyanos';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import Home from '../pages/public/Home';

import InfoEmpresas from '../pages/public/InfoEmpresas';
import NuestraPropuesta from '../pages/public/NuestraPropuesta';
import NotFound from '../pages/NotFound';
import InfoPracticantes from '../pages/public/InfoPracticantes';
import SobreEquipo from '../pages/public/SobreEquipo';
import PracticasEmpresas from '../pages/company/PracticasEmpresas';
import Practicantes from '../pages/company/Practicantes';
import MisPublicaciones from '../pages/company/MisPublicaciones';

import EstadoInscripcion from '../pages/student/EstadoInscripcion';
import PracticasPracticantes from '../pages/student/PracticasPracticantes';
import OportunidadesPracticas from '../pages/student/OportunidadesPracticas';
import OportunidadPracticaPage from '../pages/student/OportunidadPracticaPage';
import MisPostulaciones from '../pages/student/MisPostulaciones';
import Empresas from '../pages/student/Empresas';
import Recursos from '../pages/student/Recursos';
import EmpresaPage from '../pages/student/EmpresaPage';

import Perfil from '../pages/Perfil';
import InfoPracticas from '../pages/public/InfoPracticas';
import MiPublicacion from '../pages/company/MiPublicacion';
import PublicRoutes from './config/PublicRoutes';
import ProtectedRoutes from './config/ProtectedRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      {/* auth pages */}

      <Route element={<PublicRoutes />}>
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
      </Route>
      {/* public pages */}
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.nuestrapropuesta} element={<NuestraPropuesta />} />
      <Route path={ROUTES.infoPracticas} element={<InfoPracticas />} />
      <Route path={ROUTES.infoPracticantes} element={<InfoPracticantes />} />
      <Route path={ROUTES.infoEmpresas} element={<InfoEmpresas />} />
      <Route path={ROUTES.sobreEquipo} element={<SobreEquipo />} />
      <Route path={ROUTES.apoyanos} element={<Apoyanos />} />

      {/* private pages */}

      <Route element={<ProtectedRoutes />}>
        <Route path={ROUTES.perfil} element={<Perfil />} />

        {/* student pages */}
        <Route element={<ProtectedRoutes roleRequired="Student" />}>
          <Route path={ROUTES.estadoInscripcion} element={<EstadoInscripcion />} />
          <Route path={ROUTES.misPostulaciones} element={<MisPostulaciones />} />
          <Route path={ROUTES.oportunidadesPracticas} element={<OportunidadesPracticas />} />
          <Route path={ROUTES.oportunidadPractica} element={<OportunidadPracticaPage />} />
          <Route path={ROUTES.empresas} element={<Empresas />} />
          <Route path={ROUTES.practicasPracticantes} element={<PracticasPracticantes />} />
          <Route path={ROUTES.recursos} element={<Recursos />} />
          <Route path={ROUTES.empresaPage} element={<EmpresaPage />} />
        </Route>
        {/* company pages */}
        <Route element={<ProtectedRoutes roleRequired="Company" />}>
          <Route path={ROUTES.misPublicaciones} element={<MisPublicaciones />} />
          <Route path={ROUTES.miPublicacion} element={<MiPublicacion />} />
          <Route path={ROUTES.practicantes} element={<Practicantes />} />
          <Route path={ROUTES.practicasEmpresas} element={<PracticasEmpresas />} />
        </Route>

      </Route>

      {/* not found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
