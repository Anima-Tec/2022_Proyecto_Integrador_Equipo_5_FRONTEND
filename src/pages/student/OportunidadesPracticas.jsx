// listado de todas las oportunidades de practica que corresponden a los intereses del estudiante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, SimpleGrid, Text,
} from '@chakra-ui/react';
import CardJobOffer from '../../components/Cards/CardOportunity';

function OportunidadesPracticas() {
  const jobOfferData = [
    {
      name_jobOffer: 'Programación',
      description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      modality: 'Mixta',
      quotas: 2,
      workArea: 'Tecnología',
      company: {
        name_company: 'Light IT',
        photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
      },
    },
    {
      name_jobOffer: 'Diseño',
      description: 'Buscamos estudiantes con interés en diseñar aplicaciones web',
      modality: 'Virtual',
      quotas: 2,
      workArea: 'Diseño',
      company: {
        name_company: 'Broken Rubik',
        photo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEqNk6wgflnZw/company-logo_200_200/0/1633538025560?e=2147483647&v=beta&t=WXbQkyAe0rEzOjJoqlpGPyUm68qVs7PcDiDy1DdO_A0',
      },
    },
    {
      name_jobOffer: 'Marketing',
      description: 'Buscamos estudiantes con interés en desarrollar campañas de publicidad',
      modality: 'Presencial',
      quotas: 2,
      workArea: 'Gastronomía',
      company: {
        name_company: 'Coca Cola',
        photo: 'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
      },
    },
  ];

  return (
    <Box>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Oportunidades de Práctica</Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center" margin="12px auto 0 auto">
        Según tus intereses
      </Heading>
      <Text textAlign="center" margin="24px auto" maxWidth="800px">
        Te recomendamos que previo a postularte, te tomes el tiempo de investigar el perfil de las empresas y conocer más sobre ellas. Esto va ayudar que tengas mayor información de tus opciones y te ayude a tomar una mejor decisión.
      </Text>

      <SimpleGrid spacing={6} minChildWidth={{ base: '270px', sm: '270px', md: '320px' }}>

        {jobOfferData.map((jobOffer) => (
          <CardJobOffer
            nameJobOffer={jobOffer.name_jobOffer}
            description={jobOffer.description}
            modality={jobOffer.modality}
            quotas={jobOffer.quotas}
            workArea={jobOffer.workArea}
            nameCompany={jobOffer.company.name_company}
            photo={jobOffer.company.photo}
          />
        ))}

      </SimpleGrid>

    </Box>
  );
}

export default OportunidadesPracticas;
