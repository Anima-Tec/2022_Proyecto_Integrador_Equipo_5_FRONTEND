// listado de todas las empresas que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, Wrap, WrapItem,
} from '@chakra-ui/react';
import CardCompany from '../../components/Cards/CardCompany';

export default function Empresas() {
  const company = [
    {
      name_company: 'Apple',
      photo: 'https://icones.pro/wp-content/uploads/2021/04/icone-apple-symbole-logo-noir.png',
      employees: '150k',
      year_foundation: 1976,
      name_work_area: ['Marketing', 'Tecnología'],
    },
    {
      name_company: 'Google',
      photo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
      employees: '60k',
      year_foundation: 1998,
      name_work_area: ['Tecnología', 'Finanzas'],
    },
    {
      name_company: 'Amazon',
      photo: 'https://w7.pngwing.com/pngs/554/142/png-transparent-amazon-ecommerce-shopping-social-icons-color-icon.png',
      employees: '950k',
      year_foundation: 1994,
      name_work_area: ['Software', 'Marketing'],
    },
    {
      name_company: 'Coca Cola',
      photo: 'https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg',
      employees: '146k',
      year_foundation: 1892,
      name_work_area: ['Administración', 'Marketing'],
    },
  ];

  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Empresas</Heading>
      <Box>
        <Box margin="32px auto 24px auto">
          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginX="auto" textAlign="center">Según tus intereses</Heading>
        </Box>

        <Wrap marginTop={6} spacing={4} justify="center">
          {company.map((companys) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
              <CardCompany
                key={companys.name_company}
                name={companys.name_company}
                photo={companys.photo}
                employees={companys.employees}
                yearFoundation={companys.year_foundation}
                nameWorkArea={companys.name_work_area}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

    </>
  );
}
