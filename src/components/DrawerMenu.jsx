import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

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

            <NavLink to="/">
              <Flex>
                <Center color={((location.pathname === '/') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/') ? <IconHomeSelected /> : <IconHome />)}
                  Home
                </Center>
              </Flex>
            </NavLink>

            <NavLink to="/nuestra-propuesta">
              <Flex>
                <Center color={((location.pathname === '/nuestra-propuesta') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/nuestra-propuesta') ? <IconPropuestaSelected /> : <IconPropuesta />)}
                  Nuestra propuesta
                </Center>
              </Flex>
            </NavLink>

            <NavLink to="/practicantes">
              <Flex>
                <Center color={((location.pathname === '/practicantes') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/practicantes') ? <IconPracticantesSelected /> : <IconPracticantes />)}
                  Practicantes
                </Center>
              </Flex>
            </NavLink>

            <NavLink to="/empresas">
              <Flex>
                <Center color={((location.pathname === '/empresas') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/empresas') ? <IconEmpresasSelected /> : <IconEmpresas />)}
                  Empresas
                </Center>
              </Flex>
            </NavLink>

            <NavLink to="/quienes-somos">
              <Flex>
                <Center color={((location.pathname === '/quienes-somos') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/quienes-somos') ? <IconQuienesSomosSelected /> : <IconQuienesSomos />)}
                  ¿Quiénes somos?
                </Center>
              </Flex>
            </NavLink>

            <NavLink to="/apoyanos">
              <Flex>
                <Center color={((location.pathname === '/apoyanos') ? 'primary' : null)} gap={3} mb={5}>
                  {((location.pathname === '/apoyanos') ? <IconApoyanosSelected /> : <IconApoyanos />)}
                  Apoya la Propuesta
                </Center>
              </Flex>
            </NavLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
