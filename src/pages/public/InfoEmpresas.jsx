import React from 'react';
import {
  Box, Heading, Highlight, Link, Text,
} from '@chakra-ui/react';

function InfoEmpresas() {
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Empresas</Heading>

      <Box maxWidth="800px" marginX="auto">
        <Box marginY={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="left" marginX="auto">
            ¿Quiénes son las Empresas?
          </Heading>
          <Text textAlign="left" marginX="auto">
            <Highlight query={['aprendizaje', 'formación']} styles={{ fontWeight: 'bold', color: 'white' }}>
              Las empresas son aquellas organizaciones que le brindaran a los estudiantes la oportunidad de realizar sus prácticas profesionales. Estas pueden ser de cualquier sector, ya sea público o privado, y pueden ser de cualquier tamaño. Las empresas que participan de la propuesta están comprometidas con el desarrollo de talento joven y con el aprendizaje y formación de los estudiantes.
            </Highlight>
          </Text>
        </Box>
        <Box marginY={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="right" marginX="auto">
            Beneficios
          </Heading>
          <Text textAlign="right" marginX="auto">
            Para la empresa también es un espacio de aprendizaje, ya que los estudiantes pueden aportar nuevas ideas y conocimientos que pueden ser de utilidad para la organización. Además, las empresas pueden contar con estudiantes que puedan realizar tareas que no son parte de su formación académica, pero que son necesarias para el funcionamiento de la empresa. Por ejemplo, pueden realizar tareas de diseño, de marketing, de investigación, entre otras.
          </Text>
        </Box>

        <Box marginTop={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="left" marginX="auto">¿Qué deben esperar del practicante?</Heading>
          <Text textAlign="left" marginX="auto">
            Los practicantes son estudiantes. El espacio de las prácitcas es una instancia más de aprendizaje para ellos. De todas formas, en este marco es responsable de cumplir en tiempo y forma con las tareas que se le asignen y a desarrollar un tipo de conducta que sea acorde con el ambiente de la empresa. Además, el estudiante debe cumplir con los horarios establecidos.
          </Text>
        </Box>
        <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={12}>
          ¿Quieres participar como Empresa? Contactate con nosotros para participar de la propuesta.
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
            somosefect@gmail.com
          </Link>
        </Heading>
      </Box>
    </>

  );
}

export default InfoEmpresas;
