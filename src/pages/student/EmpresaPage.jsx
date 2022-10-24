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
    name: 'Google',
    description: 'Somos la página web más popular del mundo y el motor de búsqueda más utilizado a nivel mundial. Otras de nuestras empresas incluyen análisis de búsquedas en Internet, computación en nube, tecnologías de publicidad, aplicaciones web, navegador y desarrollo de sistemas operativos, principalmente para dispositivos móviles, como es el caso de Android.',
    photo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
    employees: '60k',
    year_foundation: 1998,
    name_work_area: ['Tecnología', 'Finanzas'],
    oportunity: [
      {
        name_oportunity: 'Desarrollo de software',
        description: 'Buscamos estudiantes con gran interés por desarrollar su capacidad de analisis',
        modality: 'Virtual',
        quotas: 3,
        workArea: 'Tecnología',
      },
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
