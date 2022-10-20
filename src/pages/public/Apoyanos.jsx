import React from 'react';
import {
  Box, Heading, Link, Text,
} from '@chakra-ui/react';

function Apoyanos() {
  return (
    <Box maxWidth="900px" marginX="auto">

      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={10}>Apoyanos</Heading>

      <Box marginBottom={10}>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="left" color="secondary">
          ¿Cómo nos financiamos?
        </Heading>
        <Text textAlign="left" marginX="auto">
          EFECT se financia a través de 2 formas. El ingreso principal son donaciones de entidades que apuestan a nuestra propuesta y que promueven la diminución del desempleo juvenil. Este ingreso es complementado por la suma que abonan las empresas que utilizan este servicio.
        </Text>

      </Box>

      <Box maxWidth="900px" marginX="auto" marginBottom={14}>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="right" color="secondary">¿Cómo donar?</Heading>
        <Text textAlign="right" marginX="auto" marginTop={2}>
          Actualmente nos encontramos en las primeras etapas del proceso de desarrollo de esta propuesta, por lo que es super agradecida cualquier ayuda económica, cubriendo tanto los gastos iniciales que tienen que ver con herramientas tecnológicas, como asesoramiento, trámites y desarrollo de contenido.
        </Text>
      </Box>

      <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={6}>
        Para colaborar con nosotros u obtener más información podés escribirnos a
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
          somosefect@gmail.com
        </Link>
      </Heading>
    </Box>
  );
}

export default Apoyanos;
