// listado de todas las oportunidades de practica que corresponden a los intereses del estudiante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, Text, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import CardOportunity from '../../components/Cards/CardOportunity';
import ROUTES from '../../routers/config/routes';
import InterestService from '../../networking/services/interest/InterestService';

const photo = 'https://www.tuasesordemoda.com/wp-content/uploads/2021/12/rostro-mujer-cuadrado.jpg';
export default function OportunidadesPracticas() {
  const {
    data: InterestJobOffer,
  } = useQuery(['getInterestJobOffer'], () => InterestService.getJobOfferInterest());

  console.log(InterestJobOffer);

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
        {InterestJobOffer?.map((jobOffer) => (
          <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
            <CardOportunity
              key={jobOffer.name_jobOffer}
              name={jobOffer.nameJobOffer.name}
              description={jobOffer.description.description}
              modality={jobOffer.modality.modality}
              quotas={jobOffer.quotas.quotas}
              workArea={jobOffer.nameWorkArea}
              nameCompany={jobOffer.nameCompany.company.name_company}
              photo={photo}
              onClick={() => [navigate(ROUTES.oportunidadPracticaPage)]}
            />
          </WrapItem>
        ))}
      </Wrap>

    </Box>
  );
}
