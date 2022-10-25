// listado de todas las empresas que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import CardCompany from '../../components/Cards/CardCompany';
import InterestService from '../../networking/services/interest/InterestService';

const photo = 'https://www.tuasesordemoda.com/wp-content/uploads/2021/12/rostro-mujer-cuadrado.jpg';
export default function Empresas() {
  const {
    data: InterestCompany,
  } = useQuery(['getInterestCompany'], () => InterestService.getInterestCompany());

  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Empresas</Heading>
      <Box>
        <Box margin="32px auto 24px auto">
          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginX="auto" textAlign="center">Según tus intereses</Heading>
        </Box>

        <Wrap marginTop={6} spacing={4} justify="center">
          {InterestCompany?.map((company) => (
            <WrapItem w={{ sm: '100%', md: '40%' }} justifyContent="center">
              <CardCompany
                key={company.idCompany.company.id_company}
                photo={photo}
                name={company.nameCompany.company.name_company}
                employees={company.employees.company.employees}
                yearFoundation={company.yearFoundation.company.year_foundation}
                nameWorkArea={company.nameWorkArea.company.work_companyTowork_id_company_work}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

    </>
  );
}
