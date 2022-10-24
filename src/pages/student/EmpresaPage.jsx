// información sobre cada empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Divider, Flex, Heading, Image, Text, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import * as Logo from '../../assets/icons/index';
import CardOportunity from '../../components/Cards/CardOportunity';
import ROUTES from '../../routers/config/routes';

export default function EmpresaPage() {
  const company = {
    name: 'Light IT',
    description: 'Light-it es una empresa de desarrollo de software. Nuestros experimentados equipos de desarrollo elaboran soluciones de software de alta calidad que se adhieren a los principales estándares de calidad.',
    photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
    employees: 20,
    dir_street: 'Av. Siempre Viva',
    dir_number: '742',
    year_foundation: 2010,
    name_work_area: ['Administración', 'Tecnología'],
    oportunity: [
      {
        name_oportunity: 'Programación',
        description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
        modality: 'Mixta',
        quotas: 2,
        workArea: 'Tecnología',
      },
      // {
      //   name_oportunity: 'Programación',
      //   description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
      //   modality: 'Mixta',
      //   quotas: 2,
      //   workArea: 'Tecnología',
      // },
    ],
  };

  const navigate = useNavigate();

  return (
    <>

      <Flex>
        <Center gap={3}>
          <Image src={company.photo} borderRadius="full" boxSize="60px" />
          <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">
            {company.name}
          </Heading>
        </Center>
      </Flex>

      <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">

        {company.name_work_area.map((interest) => (
          <Badge
            key={interest}
            color="black"
            borderRadius="full"
            p="4px 6px 2px 6px"
            bg="secondaryDark"
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            {interest}
          </Badge>
        ))}

      </Flex>

      <Flex marginTop={3} flexDirection="column">
        <Flex>
          <Center gap={1}>
            <Logo.People width="15px" />
            <Text>
              {company.employees}
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
              {company.year_foundation}
            </Text>
          </Center>
        </Flex>
      </Flex>

      <Box marginTop={4}>
        <Box marginBottom={2}>
          <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Descripción</Heading>
        </Box>
        <Text maxWidth="800px">{company.description}</Text>
      </Box>

      <Divider h="3px" marginTop={5} color="gray" opacity="0.2" />

      <Box margin="32px auto 24px auto">
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign={{ sm: 'center', md: 'left' }}>
          Oportunidades de Práctica en
          {' '}
          {company.name}
        </Heading>

        <Wrap marginTop={6} spacing={4}>
          {company.oportunity.map((oportunityData) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent={{ sm: 'center', md: 'flex-start' }}>
              <CardOportunity
                key={oportunityData.name_oportunity}
                nameOportunity={oportunityData.name_oportunity}
                description={oportunityData.description}
                modality={oportunityData.modality}
                quotas={oportunityData.quotas}
                workArea={oportunityData.workArea}
                onClick={() => [navigate(ROUTES.oportunidadPracticaPage)]}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

    </>
  );
}
