// información sobre como debe ser la practica desde el lado de la empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Flex, Heading, Link, Text,
} from '@chakra-ui/react';

function PracticasEmpresas() {
  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">
        Información sobre las Prácticas
      </Heading>
      <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center" marginX="auto" marginTop={3}>
        Para Empresas
      </Heading>

      <Box maxWidth="900px" marginX="auto">
        <Box marginBottom={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="primary" textAlign="center" marginX="auto">¿Qué son las Prácticas?</Heading>
          <Text textAlign="center" marginX="auto">
            Las prácticas son una oportunidad para estudiantes y empresas. La propuesta es que los estudiantes puedan aplicar los conocimientos que tienen dentro del mundo del trabajo o también aprender sobre el área de su interes a través de una pasantía en una empresa comprometida con el desarrollo de talento joven.
          </Text>
        </Box>
        <Flex gap={8} display={{ base: 'block', md: 'flex' }} justifyContent="center">
          <Box marginBottom={{ base: '32px', lg: '0px' }}>
            <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" textAlign="center" color="secondary" marginBottom={3}>
              Beneficios
            </Heading>
            <Flex flexDirection="column" gap={1}>
              <Text textAlign="center" p={3} borderWidth="2px" borderRadius="xl" borderColor="black" w={{ sm: '100%', md: '450px' }}>Capacitar a un joven desde cero.</Text>
              <Text textAlign="center" p={3} borderWidth="2px" borderRadius="xl" borderColor="black" w={{ sm: '100%', md: '450px' }}>Poder incentivar a un estudiante a profesionalizarse en tu rubro.</Text>
              <Text textAlign="center" p={3} borderWidth="2px" borderRadius="xl" borderColor="black" w={{ sm: '100%', md: '450px' }}>Incluir talento joven a tu equipo.</Text>
            </Flex>
          </Box>
        </Flex>
        <Box marginTop={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="primary" textAlign="center" marginX="auto">¿Qué debes esperar del practicante?</Heading>
          <Text textAlign="center" marginX="auto">
            Los practicantes son estudiantes. El espacio de las prácitcas es una instancia más de aprendizaje para ellos. De todas formas, en este marco es responsable de cumplir en tiempo y forma con las tareas que se le asignen de forma responsable y a desarrollar un tipo de conducta que sea acorde con el ambiente de la empresa. Además, el estudiante debe cumplir con horarios establecidos.
          </Text>
          <Text textAlign="center" marginX="auto" marginTop={4}>
            Todo esto se desarrolla a través de la tutoría que se le brinda al estudiante. La tutoría es un proceso de acompañamiento que se realiza a través de reuniones diarias o semanales con el estudiante y el tutor de la empresa. El tutor es el encargado de guiar al estudiante en el desarrollo de sus tareas y de evaluar su desempeño.
          </Text>
        </Box>
      </Box>
      <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={12}>
        En caso de que tengas preguntas puedes contactarte con nosotros
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
          somosefect@gmail.com
        </Link>
      </Heading>
    </>

  );
}

export default PracticasEmpresas;
