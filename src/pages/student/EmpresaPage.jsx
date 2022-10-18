// información sobre cada empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Divider, Flex, Heading, Image, SimpleGrid, Text,
} from '@chakra-ui/react';
import * as Logo from '../../assets/index';
import CardJobOffer from '../../components/Cards/CardOportunity';

function EmpresaPage() {
  const company = [
    {
      name: 'Light IT',
      description: 'Light-it es una empresa de desarrollo de software. Nuestros experimentados equipos de desarrollo elaboran soluciones de software de alta calidad que se adhieren a los principales estándares de calidad.',
      photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
      employees: 20,
      dir_street: 'Av. Siempre Viva',
      dir_number: '742',
      year_foundation: 2010,
      name_work_area: ['Administración', 'Tecnología'],
      jobOffer: [
        {
          name_jobOffer: 'Programación',
          description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
          modality: 'Mixta',
          quotas: 2,
          workArea: 'Tecnología',
        },
      ],
    },
    {
      name: 'Light-it',
      description: 'Light-it es una empresa de desarrollo de software. Nuestros experimentados equipos de desarrollo elaboran soluciones de software de alta calidad que se adhieren a los principales estándares de calidad.',
      photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
      employees: 20,
      dir_street: 'Av. Siempre Viva',
      dir_number: '742',
      year_foundation: 2010,
      name_work_area: ['Administración', 'Tecnología'],
      jobOffer: [
        {
          name_jobOffer: 'Diseño',
          description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
          modality: 'Mixta',
          quotas: 2,
          workArea: 'Tecnología',
        },
      ],
    },
  ];

  return (
    <>

      <Flex>
        <Center gap={3}>
          <Image src={company[0].photo} borderRadius="full" boxSize="60px" />
          <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">
            {company[0].name}
          </Heading>
        </Center>
      </Flex>

      <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">

        {company[0].name_work_area.map((interest) => (
          <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={interest} display="flex" alignContent="center" justifyContent="center">
            {interest}
          </Badge>
        ))}

      </Flex>

      <Flex marginTop={3} flexDirection="column">
        <Flex>
          <Center gap={1}>
            <Logo.People width="15px" />
            <Text>
              {company[0].employees}
              {' '}
              empleados
            </Text>
          </Center>
        </Flex>
        <Flex>
          <Center gap={1}>
            <Logo.Date width="15px" />
            <Text>
              Desde
              {' '}
              {company[0].year_foundation}
            </Text>
          </Center>
        </Flex>
      </Flex>

      <Box marginTop={4}>
        <Box marginBottom={2}>
          <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Descripción</Heading>
        </Box>
        <Text maxWidth="900px">{company[0].description}</Text>
      </Box>

      <Divider h="3px" marginTop={5} color="gray" opacity="0.2" />

      <Box margin="32px auto 24px auto">
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="bold">
          Oportunidades de Práctica en
          {' '}
          {company[0].name}
        </Heading>

        <SimpleGrid marginTop={5} spacing={6} minChildWidth={{ base: '270px', sm: '270px', md: '320px' }}>

          {company.map((companyData) => (
            <CardJobOffer
              key={companyData.jobOffer[0].name_jobOffer}
              nameJobOffer={companyData.jobOffer[0].name_jobOffer}
              description={companyData.jobOffer[0].description}
              modality={companyData.jobOffer[0].modality}
              quotas={companyData.jobOffer[0].quotas}
              workArea={companyData.jobOffer[0].workArea}
            />
          ))}

        </SimpleGrid>
      </Box>

    </>
  );
}

export default EmpresaPage;
