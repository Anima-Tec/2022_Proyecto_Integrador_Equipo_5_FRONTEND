import React from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Center,
  Box,
} from '@chakra-ui/react';

import ROUTES from '../../../routers/config/routes';

import * as Logo from '../../../assets/index';

import PrimaryButton from '../../PrimaryButton';

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box my={4}>
        <Logo.IconDrawer onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="bgColor">

          <DrawerCloseButton m="2" />

          <DrawerBody mt={6}>

            <NavLink to={ROUTES.home}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.home}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.home}`) ? <Logo.IconHome /> : <Logo.IconHome />)}
                  Inicio
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.nuestrapropuesta}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.nuestrapropuesta}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.nuestrapropuesta}`) ? <Logo.IconPropuestaSelected /> : <Logo.IconPropuesta />)}
                  Nuestra propuesta
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.practicantes}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.practicantes}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.practicantes}`) ? <Logo.IconPracticantesSelected /> : <Logo.IconPracticantes />)}
                  Practicantes
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.empresas}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.empresas}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.empresas}`) ? <Logo.IconEmpresasSelected /> : <Logo.IconEmpresas />)}
                  Empresas
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.quienesomos}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.quienesomos}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.quienesomos}`) ? <Logo.IconQuienesSomosSelected /> : <Logo.IconQuienesSomos />)}
                  ¿Quiénes somos?
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.apoyanos}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.apoyanos}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.apoyanos}`) ? <Logo.IconApoyanosSelected /> : <Logo.IconApoyanos />)}
                  Apoya la Propuesta
                </Center>
              </Flex>
            </NavLink>

            <PrimaryButton my="40" onClick={() => navigate(ROUTES.login)}>Iniciar sesión</PrimaryButton>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
