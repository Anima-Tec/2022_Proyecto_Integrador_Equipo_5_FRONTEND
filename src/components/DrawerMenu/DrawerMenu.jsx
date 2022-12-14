import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
  Heading,
  useToast,
} from '@chakra-ui/react';

import ROUTES from '../../routers/config/routes';

import * as Logo from '../../assets/icons/index';

import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import ItemDrawerMenu from './ItemDrawerMenu';
import useAuth from '../../hooks/auth/useAuth';

export default function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, setState } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const studentPhoto = 'https://www.tuasesordemoda.com/wp-content/uploads/2021/12/rostro-mujer-cuadrado.jpg';

  const companyPhoto = 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O';

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
    });
    toast({
      title: 'Sesión cerrada',
      status: 'warning',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
  };

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
            user?.role === undefined && (
              <DrawerBody mt={12}>
                <ItemDrawerMenu onClick={onClose} name="Inicio" route={ROUTES.home} icon={<Logo.Home />} iconSelected={<Logo.HomeSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Nuestra propuesta" route={ROUTES.nuestrapropuesta} icon={<Logo.Propuesta />} iconSelected={<Logo.PropuestaSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Prácticas" route={ROUTES.infoPracticas} icon={<Logo.OportunidadesPracticas />} iconSelected={<Logo.OportunidadesPracticasSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Practicantes" route={ROUTES.infoPracticantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Empresas" route={ROUTES.infoEmpresas} icon={<Logo.Empresas />} iconSelected={<Logo.EmpresasSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Sobre el Equipo" route={ROUTES.sobreEquipo} icon={<Logo.People />} iconSelected={<Logo.PeopleSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Apoya la Propuesta" route={ROUTES.apoyanos} icon={<Logo.Apoyanos />} iconSelected={<Logo.ApoyanosSelected />} />
                <Box position="fixed" bottom="24px" left="24px" right="24px">
                  <PrimaryButton onClick={() => [navigate(ROUTES.register), onClose()]}>Registrarse</PrimaryButton>
                  <PrimaryButton onClick={() => [navigate(ROUTES.login), onClose()]} bg="transparent" fontColor="primary" hover="bg-none">¿Ya tienes cuenta?</PrimaryButton>
                </Box>
              </DrawerBody>
            )
          }
          {
            user?.role === 'Student' && (
              <DrawerBody mt={6} onClick={onClose}>
                <NavLink to={ROUTES.perfil}>
                  <Flex>
                    <Center gap={3}>
                      <Image src={studentPhoto} borderRadius="full" boxSize="40px" />
                      <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{user.firstName}</Heading>
                    </Center>
                  </Flex>
                </NavLink>

                <Divider my="15px" borderColor="gray" />

                <ItemDrawerMenu name="Estado de Inscripción" route={ROUTES.estadoInscripcion} icon={<Logo.EstadoInscripcion />} iconSelected={<Logo.EstadoInscripcionSelected />} />
                <ItemDrawerMenu name="Mis Postulaciones" route={ROUTES.misPostulaciones} icon={<Logo.MisPostulaciones />} iconSelected={<Logo.MisPostulacionesSelected />} />
                <ItemDrawerMenu name="Oportunidades" route={ROUTES.oportunidadesPracticas} icon={<Logo.OportunidadesPracticas />} iconSelected={<Logo.OportunidadesPracticasSelected />} />
                <ItemDrawerMenu name="Empresas" route={ROUTES.empresas} icon={<Logo.Empresas />} iconSelected={<Logo.EmpresasSelected />} />
                <ItemDrawerMenu name="Prácticas" route={ROUTES.practicasPracticantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu name="Recursos" route={ROUTES.recursos} icon={<Logo.Recursos />} iconSelected={<Logo.RecursosSelected />} />

                <Divider my="15px" borderColor="gray" />

                <Heading as="h5" fontFamily="Poppins" fontSize="sm" fontWeight="bold" marginBottom={3}>Acerca de</Heading>
                <ItemDrawerMenu onClick={onClose} name="Nuestra propuesta" route={ROUTES.nuestrapropuesta} icon={<Logo.Propuesta />} iconSelected={<Logo.PropuestaSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Sobre el Equipo" route={ROUTES.sobreEquipo} icon={<Logo.People />} iconSelected={<Logo.PeopleSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Apoya la Propuesta" route={ROUTES.apoyanos} icon={<Logo.Apoyanos />} iconSelected={<Logo.ApoyanosSelected />} />

                <Flex alignItems="end" position="fixed" bottom="24px" left="24px" right="24px">
                  <SecondaryButton onClick={() => handleLogout()} mt="20px"><Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold">Cerrar sesión</Heading></SecondaryButton>
                </Flex>
              </DrawerBody>
            )
          }
          {
            user?.role === 'Company' && (
              <DrawerBody mt={6} onClick={onClose}>
                <NavLink to={ROUTES.perfil}>
                  <Flex>
                    <Center gap={3}>
                      <Image src={companyPhoto} borderRadius="full" boxSize="40px" />
                      <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{user?.name}</Heading>
                    </Center>
                  </Flex>
                </NavLink>

                <Divider my="20px" borderColor="gray" />

                <ItemDrawerMenu name="Mis Publicaciones" route={ROUTES.misPublicaciones} icon={<Logo.OportunidadesPracticas />} iconSelected={<Logo.OportunidadesPracticasSelected />} />
                <ItemDrawerMenu name="Practicantes" route={ROUTES.practicantes} icon={<Logo.Practicantes />} iconSelected={<Logo.PracticantesSelected />} />
                <ItemDrawerMenu name="Prácticas" route={ROUTES.practicasEmpresas} icon={<Logo.Empresas />} iconSelected={<Logo.HomeSelected />} />

                <Divider my="20px" borderColor="gray" />

                <Heading as="h5" fontFamily="Poppins" fontSize="sm" fontWeight="bold" marginBottom={3}>Acerca de</Heading>
                <ItemDrawerMenu onClick={onClose} name="Nuestra propuesta" route={ROUTES.nuestrapropuesta} icon={<Logo.Propuesta />} iconSelected={<Logo.PropuestaSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Sobre el Equipo" route={ROUTES.sobreEquipo} icon={<Logo.People />} iconSelected={<Logo.PeopleSelected />} />
                <ItemDrawerMenu onClick={onClose} name="Apoya la Propuesta" route={ROUTES.apoyanos} icon={<Logo.Apoyanos />} iconSelected={<Logo.ApoyanosSelected />} />

                <Flex alignItems="end" position="fixed" bottom="24px" left="24px" right="24px">
                  <SecondaryButton onClick={() => handleLogout()} mt="20px"><Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold">Cerrar sesión</Heading></SecondaryButton>
                </Flex>
              </DrawerBody>
            )
          }

        </DrawerContent>
      </Drawer>
    </>
  );
}
