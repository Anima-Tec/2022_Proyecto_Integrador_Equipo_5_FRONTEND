// listado de todas las oportunidades de practica que corresponden a los intereses del estudiante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, Text, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CardOportunity from '../../components/Cards/CardOportunity';
import ROUTES from '../../routers/config/routes';

export default function OportunidadesPracticas() {
  const jobOfferData = [
    {
      name_jobOffer: 'Facturación',
      description: 'Buscamos estudiantes con interés en aprender sobre facturación dentro de empresas',
      modality: 'Presencial',
      quotas: 2,
      workArea: 'Administración',
      company: {
        name_company: 'Coca Cola',
        photo: 'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
      },
    },
    {
      name_jobOffer: 'Campaña de publicidad',
      description: 'Se busca estudiante con intereses en crear material para difundir en una campaña de publicidad',
      modality: 'Mixta',
      quotas: 1,
      workArea: 'Marketing',
      company: {
        name_company: 'Apple',
        photo: 'https://icones.pro/wp-content/uploads/2021/04/icone-apple-symbole-logo-noir.png',
      },
    },
    {
      name_jobOffer: 'Desarrollo de software',
      description: 'Buscamos estudiantes con gran interés por desarrollar su capacidad de analisis',
      modality: 'Virtual',
      quotas: 3,
      workArea: 'Tecnología',
      company: {
        name_company: 'Google',
        photo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <Box>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Oportunidades de Práctica</Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center" margin="12px auto 0 auto">
        Según tus intereses
      </Heading>
      <Text textAlign="center" margin="24px auto" maxWidth="800px">
        Te recomendamos que previo a postularte, te tomes el tiempo de investigar el perfil de las empresas y conocer más sobre ellas. Esto va ayudar que tengas mayor información de tus opciones y te ayude a tomar una mejor decisión.
      </Text>

      <Wrap marginTop={6} spacing={4} justify="center">
        {jobOfferData.map((jobOffer) => (
          <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
            <CardOportunity
              key={jobOffer.name_jobOffer}
              nameJobOffer={jobOffer.name_jobOffer}
              description={jobOffer.description}
              modality={jobOffer.modality}
              quotas={jobOffer.quotas}
              workArea={jobOffer.workArea}
              nameCompany={jobOffer.company.name_company}
              photo={jobOffer.company.photo}
              onClick={() => [navigate(ROUTES.oportunidadPracticaPage)]}
            />
          </WrapItem>
        ))}
      </Wrap>

    </Box>
  );
}
