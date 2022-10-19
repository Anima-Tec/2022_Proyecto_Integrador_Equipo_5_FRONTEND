// información sobre como debe ser la practica desde el lado del practicante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Flex, Heading, Link, Text,
} from '@chakra-ui/react';

function PracticasPracticantes() {
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">
        Información sobre las Prácticas
      </Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="bold" textAlign="center" margin="12px auto 30px auto">
        Para Estudiantes
      </Heading>

      <Box maxWidth="900px" marginX="auto">
        <Box marginBottom={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="primary" textAlign="center" marginX="auto">¿Qué son las prácticas?</Heading>
          <Text textAlign="center" marginX="auto">
            Las prácticas son una oportunidad para estudiantes con un promedio de 7 o más de cualquier centro educativo que tengan entre 15 y 25 años y no hayan tenido experiencia laboral previa, puedan aplicar los conocimientos que tienen dentro del mundo del trabajo o también aprender sobre el área de su interes.
          </Text>
        </Box>
        <Flex gap={8} display={{ base: 'block', md: 'flex' }}>
          <Box marginBottom={{ base: '32px', lg: '0px' }}>
            <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textAlign="center" color="secondary" marginBottom={3}>
              Beneficios
            </Heading>
            <Flex flexDirection="column" gap={3}>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">Obtener la experiencia laboral previa que necesitas para tu futuro.</Text>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">Obtener más información del mundo laboral de tu interés para saber si es realmente tu pasión.</Text>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">Generar red de contactos.</Text>
            </Flex>
          </Box>
          <Box>
            <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textAlign="center" color="secondary" marginBottom={3}>
              Habilidades
            </Heading>
            <Flex flexDirection="column" gap={3}>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">
                Capacidad de abstracción de conceptos pudiendo llevar lo aprendido en la práctica en el aula de clase.
              </Text>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">Capacidad de análisis.</Text>
              <Text textAlign="center" p={2} borderWidth="1px" borderRadius="xl" borderColor="gray">Aprender la forma de comunicación apropiada para el entorno laboral</Text>
            </Flex>
          </Box>
        </Flex>
        <Box marginTop={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="primary" textAlign="center" marginX="auto">¿Qué debes esperar de la empresa?</Heading>
          <Text textAlign="center" marginX="auto">
            La empresa te brindará las herramientas y el apoyo necesario para que este proceso sea provechoso.
            Tendrás un tutor asignado por la empresa que te guiará en el proceso de aprendizaje y te ayudará a resolver cualquier duda que tengas.
          </Text>
        </Box>
      </Box>
      <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={12}>
        En caso de que tengas preguntas puedes contactarte con nosotros
        {' '}
        <Link fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
          somosefect@gmail.com
        </Link>
      </Heading>
    </>
  );
}

export default PracticasPracticantes;
