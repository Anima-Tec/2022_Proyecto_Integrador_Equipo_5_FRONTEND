// listado de las oportunidades de practica publicadas por la empresa dueña del perfil
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Flex, Heading, Link, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routers/config/routes';
import CardOportunity from '../../components/Cards/CardOportunity';
import ModalNewOpotunity from '../../components/Modal/ModalNewOpotunity';

export default function MisPublicaciones() {
  const myOportunities = [
    {
      id: 1,
      name_oportunity: 'Diseño',
      description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      modality: 'Mixta',
      quotas: 2,
      workArea: 'Tecnología',
    },
    {
      id: 2,
      name_oportunity: 'Programación',
      description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      modality: 'Mixta',
      quotas: 2,
      workArea: 'Tecnología',
    },
    {
      id: 2,
      name_oportunity: 'Programación',
      description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      modality: 'Mixta',
      quotas: 2,
      workArea: 'Tecnología',
    },
  ];

  const navigate = useNavigate();

  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Mis Publicaciones</Heading>

      {myOportunities.length === 0 && (
      <>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" margin="auto" marginTop={4}>
          Todavía no has publicado ninguna
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.practicasEmpresas}>
            Oportunidad de Práctica.
          </Link>
        </Heading>

        <Flex marginTop={6} justifyContent="center">
          <ModalNewOpotunity />
        </Flex>

        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={12}>
          ¿Aún no te sientes preparado?
        </Heading>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
          Conocé mejor
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.practicasEmpresas}>
            Nuestra Propuesta para Empresas
          </Link>
        </Heading>

        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={2}>
          También podés contactarte con nosotros por correo electrónico a
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
            somosefect@gmail.com
          </Link>
        </Heading>
      </>

      )}

      {myOportunities.length > 0 && (
      <>
        <Flex marginTop={6} justifyContent="center">
          <ModalNewOpotunity />
        </Flex>

        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="900px" margin="auto" marginTop={8}>
          A continuación se muestran las
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.practicasEmpresas}>
            Oportunidades de Práctica
          </Link>
          {' '}
          que publicaste.
        </Heading>

        <Wrap marginTop={6} spacing={4} justify="center">
          {myOportunities.map((companyData) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
              <CardOportunity
                key={companyData.name_oportunity}
                nameOportunity={companyData.name_oportunity}
                description={companyData.description}
                modality={companyData.modality}
                quotas={companyData.quotas}
                workArea={companyData.workArea}
                onClick={() => [navigate(ROUTES.miPublicacion)]}
              />
            </WrapItem>
          ))}
        </Wrap>
      </>
      )}

    </>

  );
}
