// información sobre como debe ser la practica desde el lado de la empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import { Heading } from '@chakra-ui/react';

function PracticasEmpresas() {
  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">
        Información sobre las Prácticas
      </Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="bold" textAlign="center" marginX="auto" marginTop={3}>
        Para Empresas
      </Heading>
    </>

  );
}

export default PracticasEmpresas;
