// not found page
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ROUTES from '../routers/config/routes';

export default function NotFound() {
  return (
    <Box marginTop="100px">
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center">Lo sentimos</Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center">No pudimos mostrarte la página que estas buscando :c</Heading>
      <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textColor="primary" textAlign="center" textDecoration="underline" marginTop={8}>
        <a href={ROUTES.home}>
          Volver a Home
        </a>
      </Heading>
    </Box>
  );
}
