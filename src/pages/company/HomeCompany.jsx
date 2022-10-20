import React from 'react';
import {
  Box, Center, Flex, Heading, Highlight, Link, Text,
} from '@chakra-ui/react';
import ROUTES from '../../routers/config/routes';

function HomeCompany() {
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" color="primary">Somos EFECT</Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center" marginTop={3} marginBottom={14}>El Futuro Es Con Trabajo</Heading>

      <Flex display={{ base: 'block', md: 'flex' }} justifyContent="center" marginBottom={8}>
        <Center display={{ base: 'block', md: 'flex' }} gap={12}>
          <Flex flexDirection="column" justifyContent="center" marginBottom={{ base: '32px', md: '0px' }} p={4} borderWidth="2px" borderRadius="xl" borderColor="black" height="100%">
            <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="center" color="secondary">¿Qué es Efect?</Heading>
            <Text maxW="500px" textAlign="center" marginX="auto">
              <Highlight query={['conecta', 'estudiantes', 'empresas']} styles={{ fontWeight: 'bold', color: 'white' }}>
                EFECT es una plataforma que conecta a estudiantes con interés en participar del ámbito laboral con empresas disponibles a formar profesionalmente a ese estudiante.
              </Highlight>
            </Text>
          </Flex>
          <Box p={4} borderWidth="2px" borderRadius="xl" borderColor="black" height="100%">
            <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="center" color="secondary">¿Qué problema resolvemos?</Heading>
            <Text maxW="500px" textAlign="center" marginX="auto">
              <Highlight query={['desempleo juvenil', 'oportunidades laborales']} styles={{ fontWeight: 'bold', color: 'white' }}>
                Una de las principales causas del desempleo juvenil es la falta de experiencia laboral. Este es el problema principal al que apuntamos, aumentamos las oportunidades laborales para estudiantes logrando que tengan la primera experiencia laboral antes del egreso del sistema educativo.
              </Highlight>
            </Text>
          </Box>
        </Center>
      </Flex>

      <Box>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="center" color="primary">Nuestro Objetivo</Heading>
        <Text maxW="900px" textAlign="center" marginX="auto">
          <Highlight query={['desempleo juvenil disminuya', 'proceso de aprendizaje', 'talentos jóvenes']} styles={{ fontWeight: 'bold', color: 'white' }}>
            Nuestro objetivo es lograr que el desempleo juvenil disminuya. Queremos que los estudiantes puedan tener una formación laboral como parte de su proceso de aprendizaje. Por otro lado, que las empresas consigan talentos jóvenes dentro de sus equipos.
          </Highlight>
        </Text>
      </Box>

      <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={12}>
        ¿Sabes que hacemos para resolver esta problemática? <br /> Averigualo donde hablamos sobre
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.nuestrapropuesta}>
          Nuestra Propuesta
        </Link>
      </Heading>

      <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={24}>
        Si quieres conocernos o tienes dudas puedes revisar la sección
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.sobreEquipo}>
          Sobre el Equipo
        </Link>
      </Heading>
    </>
  );
}

export default HomeCompany;
