/* eslint-disable max-len */
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Center,
  Image,
  Divider,
} from '@chakra-ui/react';

import ROUTES from '../../routers/config/routes';

import * as Logo from '../../assets/index';

import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import ItemDrawerMenu from './ItemDrawerMenu';

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  // const userRole = 'guest';
  const userRole = 'student';
  // const userRole = 'company';

  const studentName = 'Juan Perez';
  const studentPhoto = 'https://bit.ly/dan-abramov';

  const companyName = 'Light IT';
  const companyPhoto = 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O';

  return (
    <>
      <Box>
        <Logo.Drawer cursor="pointer" onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="bgColor">

          <DrawerCloseButton m="2" />

          {
            userRole === 'guest' && (
              <DrawerBody mt={6}>
                <ItemDrawerMenu onClick={onClose} name="Inicio" route={ROUTES.home} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Nuestra propuesta" route={ROUTES.nuestrapropuesta} icon={<Logo.Propuesta />} iconSelected={<Logo.PropuestaSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Prácticas" route={ROUTES.infoPracticas} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Practicantes" route={ROUTES.infoPracticantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Empresas" route={ROUTES.infoEmpresas} icon={<Logo.Empresas />} iconSelected={<Logo.EmpresasSelected />} />
                <ItemDrawerMenu onClick={onClose} name="¿Quiénes somos?" route={ROUTES.quienesomos} icon={<Logo.People />} iconSelected={<Logo.PeopleSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Apoya la Propuesta" route={ROUTES.apoyanos} icon={<Logo.Apoyanos />} iconSelected={<Logo.ApoyanosSelected />} />
                <Box position="fixed" bottom="24px" left="24px" right="24px">
                  <PrimaryButton onClick={() => [navigate(ROUTES.register), onClose()]}>Registrarse</PrimaryButton>
                  <PrimaryButton onClick={() => [navigate(ROUTES.login), onClose()]} bg="transparent" fontColor="primary">¿Ya tienes cuenta?</PrimaryButton>
                </Box>
              </DrawerBody>
            )
          }
          {
            userRole === 'student' && (
              <DrawerBody mt={6} onClick={onClose}>
                <NavLink to={ROUTES.perfil}>
                  <Flex>
                    <Center color={((location.pathname === ROUTES.perfil) ? 'primary' : null)} gap={3}>
                      <Image src={studentPhoto} borderRadius="full" boxSize="40px" />
                      <h4>{studentName}</h4>
                    </Center>
                  </Flex>
                </NavLink>

                <Divider my="20px" borderColor="gray" />

                <ItemDrawerMenu name="Estado de Inscripción" route={ROUTES.estadoInscripcion} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu name="Mis Postulaciones" route={ROUTES.misPostulaciones} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu name="Ofertas de Trabajo" route={ROUTES.ofertasTrabajo} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu name="Empresas" route={ROUTES.empresas} icon={<Logo.Empresas />} iconSelected={<Logo.EmpresasSelected />} />
                <ItemDrawerMenu name="Prácticas" route={ROUTES.practicasPracticantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu name="Recursos" route={ROUTES.recursos} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <Flex alignItems="end" position="fixed" bottom="24px" left="24px" right="24px">
                  <SecondaryButton onClick={() => navigate(ROUTES.home)} mt="20px">Cerrar sesión</SecondaryButton>
                </Flex>
              </DrawerBody>
            )
          }
          {
            userRole === 'company' && (
              <DrawerBody mt={6} onClick={onClose}>
                <NavLink to={ROUTES.perfil}>
                  <Flex>
                    <Center color={((location.pathname === ROUTES.perfil) ? 'primary' : null)} gap={3}>
                      <Image src={companyPhoto} borderRadius="full" boxSize="40px" />
                      {companyName}
                    </Center>
                  </Flex>
                </NavLink>

                <Divider my="20px" borderColor="gray" />

                <ItemDrawerMenu name="Mis ofertas" route={ROUTES.misOfertas} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu name="Practicantes" route={ROUTES.practicantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu name="Prácticas" route={ROUTES.practicasEmpresas} icon={<Logo.Empresas />} iconSelected={<Logo.HomeSelected />} />
                <Flex alignItems="end" position="fixed" bottom="24px" left="24px" right="24px">
                  <SecondaryButton onClick={() => navigate(ROUTES.home)} mt="20px">Cerrar sesión</SecondaryButton>
                </Flex>
              </DrawerBody>
            )
          }
          {
            userRole === 'admin' && (
              <DrawerBody mt={6} onClick={onClose}>
                <ItemDrawerMenu name="Inicio" route={ROUTES.home} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu name="Nuestra propuesta" route={ROUTES.nuestrapropuesta} icon={<Logo.Propuesta />} iconSelected={<Logo.PropuestaSelected />} />
                <ItemDrawerMenu name="Practicantes" route={ROUTES.practicantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu name="Empresas" route={ROUTES.empresas} icon={<Logo.Empresas />} iconSelected={<Logo.EmpresasSelected />} />
                <ItemDrawerMenu name="¿Quiénes somos?" route={ROUTES.quienesomos} icon={<Logo.People />} iconSelected={<Logo.PeopleSelected />} />
                <ItemDrawerMenu name="Apoya la Propuesta" route={ROUTES.apoyanos} icon={<Logo.Apoyanos />} iconSelected={<Logo.ApoyanosSelected />} />
                <PrimaryButton my="40" onClick={() => navigate(ROUTES.login)}>Iniciar sesión</PrimaryButton>
              </DrawerBody>
            )
          }

        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
