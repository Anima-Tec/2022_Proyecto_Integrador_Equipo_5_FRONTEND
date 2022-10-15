// listado de todas las ofertas de trabajo que corresponden a los intereses del estudiante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Center, Heading, SimpleGrid,
} from '@chakra-ui/react';
import CardJobOffer from '../../components/Cards/CardJobOffer';

function OfertasTrabajo() {
  const jobOfferData = [
    {
      name_jobOffer: 'Programación',
      description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      modality: 'Mixta',
      quotas: 2,
      workarea: 'Tecnología',
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
      workarea: 'Diseño',
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
      workarea: 'Gastronomía',
      company: {
        name_company: 'Coca Cola',
        photo: 'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
      },
    },
  ];

  return (
    <>
      <Heading>
        <Center>
          <h1>Ofertas de Trabajo</h1>
        </Center>
      </Heading>

      <Box>

        <Box margin="32px auto 24px auto">
          <h2>Según tus intereses</h2>
        </Box>

        <SimpleGrid spacing={6} minChildWidth={{ base: '270px', sm: '270px', md: '320px' }}>

          {jobOfferData.map((jobOffer) => (
            <CardJobOffer
              name_jobOffer={jobOffer.name_jobOffer}
              description={jobOffer.description}
              modality={jobOffer.modality}
              quotas={jobOffer.quotas}
              workarea={jobOffer.workarea}
              name_company={jobOffer.company.name_company}
              photo={jobOffer.company.photo}
            />
          ))}

        </SimpleGrid>

      </Box>
    </>
  );
}

export default OfertasTrabajo;
