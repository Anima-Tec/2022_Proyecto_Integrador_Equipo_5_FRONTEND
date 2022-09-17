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

import ROUTES from '../routes/routes';

import { ReactComponent as IconMenu } from '../assets/icon-drawer.svg';
import { ReactComponent as IconHome } from '../assets/icon-home.svg';
import { ReactComponent as IconPropuesta } from '../assets/icon-propuesta.svg';
import { ReactComponent as IconPracticantes } from '../assets/icon-practicantes.svg';
import { ReactComponent as IconEmpresas } from '../assets/icon-empresas.svg';
import { ReactComponent as IconQuienesSomos } from '../assets/icon-quienessomos.svg';
import { ReactComponent as IconApoyanos } from '../assets/icon-apoyanos.svg';

import { ReactComponent as IconHomeSelected } from '../assets/icon-home-selected.svg';
import { ReactComponent as IconPropuestaSelected } from '../assets/icon-propuesta-selected.svg';
import { ReactComponent as IconPracticantesSelected } from '../assets/icon-practicantes-selected.svg';
import { ReactComponent as IconEmpresasSelected } from '../assets/icon-empresas-selected.svg';
import { ReactComponent as IconQuienesSomosSelected } from '../assets/icon-quienessomos-selected.svg';
import { ReactComponent as IconApoyanosSelected } from '../assets/icon-apoyanos-selected.svg';
import PrimaryButton from './PrimaryButton';

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box my={4}>
        <IconMenu onClick={onOpen} />
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
                  {((location.pathname === `${ROUTES.home}`) ? <IconHomeSelected /> : <IconHome />)}
                  Inicio
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.nuestrapropuesta}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.nuestrapropuesta}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.nuestrapropuesta}`) ? <IconPropuestaSelected /> : <IconPropuesta />)}
                  Nuestra propuesta
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.practicantes}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.practicantes}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.practicantes}`) ? <IconPracticantesSelected /> : <IconPracticantes />)}
                  Practicantes
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.empresas}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.empresas}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.empresas}`) ? <IconEmpresasSelected /> : <IconEmpresas />)}
                  Empresas
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.quienesomos}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.quienesomos}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.quienesomos}`) ? <IconQuienesSomosSelected /> : <IconQuienesSomos />)}
                  ¿Quiénes somos?
                </Center>
              </Flex>
            </NavLink>

            <NavLink to={ROUTES.apoyanos}>
              <Flex>
                <Center color={((location.pathname === `${ROUTES.apoyanos}`) ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === `${ROUTES.apoyanos}`) ? <IconApoyanosSelected /> : <IconApoyanos />)}
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
