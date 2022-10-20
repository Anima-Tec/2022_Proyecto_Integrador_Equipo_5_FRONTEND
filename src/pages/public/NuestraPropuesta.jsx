import React from 'react';
import {
  Box, Center, Flex, Heading, Highlight, Link, Text,
} from '@chakra-ui/react';
import ROUTES from '../../routers/config/routes';
import * as Logo from '../../assets/index';

function NuestraPropuesta() {
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={10}>Nuestra Propuesta</Heading>

      <Box marginBottom={10}>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="center" color="secondary">¿Qué problema resolvemos?</Heading>
        <Text maxW="900px" textAlign="center" marginX="auto">
          <Highlight query={['desempleo juvenil', 'oportunidades laborales']} styles={{ fontWeight: 'bold', color: 'white' }}>
            Una de las principales causas del desempleo juvenil es la falta de experiencia laboral. Este es el problema principal al que apuntamos, aumentamos las oportunidades laborales para estudiantes logrando que tengan la primera experiencia laboral antes del egreso del sistema educativo.
          </Highlight>
        </Text>
        <Text maxW="900px" textAlign="center" marginX="auto" marginTop={2}>
          Otra de las problemáticas que resolvemos es la poca participación joven en los equipos de trabajo de las empresas.
        </Text>
      </Box>

      <Box maxWidth="1000px" marginX="auto">

        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={4} textAlign="center" color="secondary">¿Cuál es nuestra propuesta?</Heading>

        <Flex gap={12} display={{ base: 'block', md: 'flex' }}>
          <Box width={{ base: '100%', lg: '50%' }} marginBottom={{ base: '24px', lg: '0px' }}>
            <Flex justifyContent="center" marginBottom={2}>
              <Center gap={3}>
                <Logo.PracticantesSelected width="30px" />
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textColor="primary">
                  <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.infoPracticantes}>
                    Estudiantes
                  </Link>
                </Heading>
              </Center>
            </Flex>
            <Text textAlign="center" marginX="auto">
              <Highlight query={['primera experiencia laboral', 'prácticas profesionales']} styles={{ fontWeight: 'bold', color: 'white' }}>
                Brindar una primera experiencia laboral a estudiantes de 15 a 25 años, a través de la creación de un programa de prácticas profesionales, que les permita adquirir conocimientos y habilidades en el ámbito laboral, a través de la participación de tareas reales en empresas. Además cuando se registra un estudiante cuenta con una capacitación para realizar entrevistas de trabajo.
              </Highlight>
            </Text>
          </Box>
          <Box width={{ base: '100%', lg: '50%' }}>
            <Flex justifyContent="center" marginBottom={2}>
              <Center gap={3}>
                <Logo.EmpresasSelected width="30px" />
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textColor="primary">
                  <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.infoEmpresas}>
                    Empresas
                  </Link>
                </Heading>
              </Center>
            </Flex>
            <Text textAlign="center" marginX="auto">
              <Highlight query={['documentación correspondiente', 'capacitación']} styles={{ fontWeight: 'bold', color: 'white' }}>
                A su vez, la inserción de estudiantes en empresas es un gran beneficio para ellas, por eso EFECT en este programa de prácticas se encarga de llevar a cabo la documentación correspondiente de los estudiantes menores de edad para comenzar en el ámbito del trabajo. Otro beneficio que tiene la empresa es capacitar desde cero a los estudiantes en el área que se les asigne.
              </Highlight>
            </Text>
          </Box>
        </Flex>

      </Box>

      <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={6}>
        Para saber más sobre las Prácticas Profesionales, visita la sección
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.infoPracticas}>
          Prácticas
        </Link>
      </Heading>

    </>
  );
}

export default NuestraPropuesta;
