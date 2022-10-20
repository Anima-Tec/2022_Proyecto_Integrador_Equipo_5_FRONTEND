import React from 'react';
import {
  Box, Heading, Highlight, Link, Text,
} from '@chakra-ui/react';

function InfoPracticas() {
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={10}>
        Información sobre las Prácticas
      </Heading>
      <Box maxWidth="800px" marginX="auto">

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="left" marginX="auto">¿Qué son las Prácticas?</Heading>
          <Text textAlign="left" marginX="auto">
            Las prácticas son una oportunidad para estudiantes con un promedio de 7 o más de cualquier centro educativo que tengan entre 15 y 25 años y no hayan tenido experiencia laboral previa, puedan aplicar los conocimientos que tienen dentro del mundo del trabajo o también aprender sobre el área de su interés a través de una pasantía en una empresa comprometida con el desarrollo de talento joven.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="right" marginX="auto">¿Cómo funcionan?</Heading>
          <Text textAlign="right" marginX="auto">
            Las prácticas se desarrollan en el marco empresarial. Las empresas se comprometen a brindarle a estudiantes interesados y validados por EFECT una experiencia de aprendizaje en el marco profesional y a supervisar su desempeño. El estudiante es responsable de cumplir con las tareas que se le asignen y a desarrollar un tipo de conducta que sea acorde con el ambiente de la empresa.
          </Text>
        </Box>

        <Box marginTop={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="2xl" fontWeight="bold" marginBottom={3} color="primary" textAlign="left" marginX="auto">¿Cómo se concreta la práctica?</Heading>
          <Text textAlign="left" marginX="auto" marginTop={3}>
            <Highlight query={['contrato de prácticas']} styles={{ fontWeight: 'bold', color: 'secondary' }}>
              La práctica se concreta en un contrato de prácticas entre el estudiante y la empresa. Es un documento que se firma por ambas partes y que contiene los términos y condiciones de la práctica.
            </Highlight>
          </Text>
          <Text textAlign="left" marginX="auto" marginTop={3}>
            <Highlight query={['validar la información', 'plataforma']} styles={{ fontWeight: 'bold', color: 'secondary' }}>
              EFECT se compromete a validar la información que se presenta en la plataforma y a verificar que el estudiante cumpla con los requisitos para participar en la práctica, como también determinar si la empresa es apta para recibir a un estudiante.
            </Highlight>
          </Text>
          <Text textAlign="center" marginX="auto" marginTop={3} p={2} borderWidth="2px" borderRadius="xl" borderColor="black" fontWeight="bold">
            <Highlight query={['no participa']} styles={{ fontWeight: 'bold', color: 'secondary' }}>
              En la versión actual de la plataforma, EFECT no participa en el proceso de selección ni supervisa el desarrollo de la práctica. La empresa es la responsable de dichas tareas, siendo EFECT un intermediario entre el estudiante y la empresa quien solo los conecta.
            </Highlight>
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

export default InfoPracticas;
