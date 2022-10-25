// listado de las oportunidades de practica publicadas por la empresa dueña del perfil
// -------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import {
  Flex, Heading, Link, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routers/config/routes';
import ModalNewOpotunity from '../../components/Modal/ModalNewOpotunity';

import CardOportunity from '../../components/Cards/CardOportunity';
import useGetJobOffers from '../../hooks/jobOfffer/mutations/useGetJobOffers';

export default function MisPublicaciones() {
  const [jobOffers, setJobOffers] = useState([]);
  const { mutateAsync } = useGetJobOffers();
  const navigate = useNavigate();
  const getJobOffer = async () => {
    const data = await mutateAsync();
    setJobOffers(data.jobOffers);
  };
  useEffect(() => {
    getJobOffer();
  }, []);

  const handleNavigate = (id) => {
    navigate(`/mi-publicacion/${id}`);
  };
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Mis Publicaciones</Heading>
      {jobOffers.length === 0 && (
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

      {jobOffers.length > 0 && (
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
          {jobOffers.map((jobOffer) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
              <CardOportunity
                key={jobOffer.id}
                id={jobOffer.id}
                name={jobOffer.name}
                description={jobOffer.description}
                modality={jobOffer.modality}
                quotas={jobOffer.quotas}
                workArea={jobOffer.workArea.nameWorkArea}
                onClick={() => handleNavigate(jobOffer.id)}
              />
            </WrapItem>
          ))}
        </Wrap>
      </>
      )}

    </>

  );
}
