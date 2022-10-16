/* eslint-disable camelcase */
// listado de todas las empresas que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, SimpleGrid,
} from '@chakra-ui/react';
import CardCompany from '../../components/Cards/CardCompany';

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
      name_company: 'Nescafé',
      photo: 'https://brandemia.org/sites/default/files/sites/default/files/nescafe-redvolution-new-logo.jpg',
      employees: 100,
      // dir_street: 'Av. Carrasco',
      // dir_number: '268',
      year_foundation: 2012,
      name_work_area: ['Comida', 'Marketing'],
    },
    {
      name_company: 'Coca Cola',
      photo: 'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
      employees: 100,
      // dir_street: 'Av. Carrasco',
      // dir_number: '268',
      year_foundation: 2012,
      name_work_area: ['Comida', 'Marketing', 'Tecnología', 'Cubos de rubik'],
    },
  ];

  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Empresas</Heading>
      <Box>
        <Box margin="32px auto 24px auto">
          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="bold">Según tus intereses</Heading>
        </Box>

        <SimpleGrid spacing={8} minChildWidth="240px">

          {company.map((companys) => (
            <CardCompany
              key={companys.name_company}
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
