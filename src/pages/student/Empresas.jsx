/* eslint-disable camelcase */
// listado de todas las empresas que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Center, Heading, SimpleGrid,
} from '@chakra-ui/react';
import ItemCompany from '../../components/ItemCompany';

function Empresas() {
  const company = [
    {
      name_company: 'Light IT',
      photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
      employees: 20,
      // dir_street: 'Av. Siempre Viva',
      // dir_number: '742',
      year_foundation: 2010,
      name_work_area: ['Administración', 'Tecnología'],
    },
    {
      name_company: 'Broken Rubik',
      photo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEqNk6wgflnZw/company-logo_200_200/0/1633538025560?e=2147483647&v=beta&t=WXbQkyAe0rEzOjJoqlpGPyUm68qVs7PcDiDy1DdO_A0',
      employees: 10,
      // dir_street: 'Av. Carrasco',
      // dir_number: '268',
      year_foundation: 2012,
      name_work_area: ['Tecnología', 'Cubos de rubik'],
    },
    {
      name_company: 'Coca Cola',
      photo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEqNk6wgflnZw/company-logo_200_200/0/1633538025560?e=2147483647&v=beta&t=WXbQkyAe0rEzOjJoqlpGPyUm68qVs7PcDiDy1DdO_A0',
      employees: 100,
      // dir_street: 'Av. Carrasco',
      // dir_number: '268',
      year_foundation: 2012,
      name_work_area: ['Comida', 'Marketing'],
    },
    {
      name_company: 'Coca Cola',
      photo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEqNk6wgflnZw/company-logo_200_200/0/1633538025560?e=2147483647&v=beta&t=WXbQkyAe0rEzOjJoqlpGPyUm68qVs7PcDiDy1DdO_A0',
      employees: 100,
      // dir_street: 'Av. Carrasco',
      // dir_number: '268',
      year_foundation: 2012,
      name_work_area: ['Comida', 'Marketing', 'Tecnología', 'Cubos de rubik'],
    },
  ];

  return (
    <>
      <Heading>
        <Center>
          <h1>Empresas</h1>
        </Center>
      </Heading>
      <Box>
        <Box margin="32px auto 24px auto">
          <h2>Según tus intereses</h2>
        </Box>

        <SimpleGrid spacing={8} minChildWidth="240px">

          {company.map((companys) => (
            <ItemCompany
              name={companys.name_company}
              photo={companys.photo}
              employees={companys.employees}
              year_foundation={companys.year_foundation}
              name_work_area={companys.name_work_area}
            />
          ))}

        </SimpleGrid>
      </Box>

      <Box>
        <Box margin="40px auto 24px auto">
          <h2>Otras Empresas</h2>
        </Box>

        <SimpleGrid spacing={8} columns={2} minChildWidth="240px">

          {company.map((companys) => (
            <ItemCompany
              name={companys.name_company}
              photo={companys.photo}
              employees={companys.employees}
              year_foundation={companys.year_foundation}
              name_work_area={companys.name_work_area}
            />
          ))}

        </SimpleGrid>
      </Box>

    </>
  );
}

export default Empresas;
