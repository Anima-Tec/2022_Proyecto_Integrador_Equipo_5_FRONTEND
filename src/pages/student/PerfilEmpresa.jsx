/* eslint-disable max-len */
// información sobre cada empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Divider, Flex, Image,
} from '@chakra-ui/react';
import * as Logo from '../../assets/index';

function PerfilEmpresa() {
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
    },
  ];
  return (
    <>

      <Flex>
        <Center gap={3}>
          <Image src={company[0].photo} borderRadius="full" boxSize="60px" />
          <h1>{company[0].name}</h1>
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
            <p>
              {company[0].employees}
              {' '}
              empleados
            </p>
          </Center>
        </Flex>
        <Flex>
          <Center gap={1}>
            <Logo.Date width="15px" />
            <p>
              Año de fundación
              {' '}
              {company[0].year_foundation}
            </p>
          </Center>
        </Flex>
      </Flex>

      <Box marginTop={4}>
        <Box marginBottom={2}>
          <h5>Descripción</h5>
        </Box>
        <p>{company[0].description}</p>
      </Box>

      <Divider h="3px" marginTop={5} color="gray" opacity="0.2" />

      <Box margin="32px auto 24px auto">
        <h2>
          Ofertas de Trabajo de
          {' '}
          {company[0].name}
        </h2>
      </Box>

    </>
  );
}

export default PerfilEmpresa;
