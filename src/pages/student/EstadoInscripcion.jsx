// información sobre el estado de inscripción del practicante
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box,
  Center, Flex, Heading, Highlight, Link,
} from '@chakra-ui/react';
import ModalRequisitos from '../../components/Modal/ModalRequisitos';
import ROUTES from '../../routers/config/routes';

export default function EstadoInscripcion() {
  const student = {
    first_name: 'Juan',
    last_name: 'Perez',
    // status: 'rejected',
    // status: 'pending',
    status: 'onboarding',
    // status: 'approved',
  };

  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Estado de Inscripción </Heading>
      <Flex justifyContent="center">
        <Center flexDirection="column">
          <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={12}>
            {student.status === 'rejected' && (
              <Highlight query="rechazada" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
                Su cuenta fue rechazada
              </Highlight>
            )}
            {student.status === 'pending' && (
              <Highlight query="pendiente" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
                Su cuenta está pendiente de aprobación
              </Highlight>
            )}
            {student.status === 'onboarding' && (
            <>
              <Highlight query="aprobada" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
                Su cuenta fue aprobada, felicitaciones.
              </Highlight>
              <br />
              <Highlight query="capacitación" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
                Te encuentras en la etapa de capacitación.
              </Highlight>
            </>
            )}
            {student.status === 'approved' && (
              <Highlight query="aprobada" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
                Su cuenta fue aprobada, felicitaciones.
              </Highlight>
            )}
          </Heading>

          {student.status === 'rejected' && (
          <>
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
              No pudimos verificar que cumplas con los requisitos que solicitamos para registrarte.
            </Heading>
            <Box marginTop={8}>
              <ModalRequisitos />
            </Box>
          </>
          )}
          {student.status === 'pending' && (
          <>
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
              Estamos verificando que cumplas con los requisitos.
              En pocos días recibirás un correo electrónico con el resultado.
            </Heading>
            <Box marginTop={8}>
              <ModalRequisitos />
            </Box>
          </>
          )}
          {student.status === 'onboarding' && (
          <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
            Deberás completar la etapa de capacitación para poder postularte a Oportunidades de Práctica.
            {' '}
            <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.recursos}>
              Ver capacitación
            </Link>
          </Heading>
          )}
          {student.status === 'approved' && (
          <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={4}>
            Ya puedes postularte a
            {' '}
            <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.oportunidadesPracticas}>
              Oportunidades de Prácticas
            </Link>
          </Heading>
          )}

          {/* ignore this error in console */}
          {/* bundle.js:59480 Warning: validateDOMNesting(...): <h4> cannot appear as a child of <h4>. */}
          <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={12}>
            {student.status === 'rejected' && (
              <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={14}>
                En caso de que se trate de un error, contactese con nosotros por correo electrónico a
                {' '}
                <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
                  somosefect@gmail.com
                </Link>
              </Heading>
            )}
            {student.status === 'pending' && (
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={14}>
              En caso de que tengas preguntas puedes contactarte con nosotros
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
                somosefect@gmail.com
              </Link>
            </Heading>
            )}
            {student.status === 'onboarding' && (
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={14}>
              En caso de que tengas preguntas puedes contactarte con nosotros
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
                somosefect@gmail.com
              </Link>
            </Heading>
            )}
            {student.status === 'approved' && (
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={14}>
              En caso de que tengas preguntas puedes contactarte con nosotros
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
                somosefect@gmail.com
              </Link>
            </Heading>
            )}
          </Heading>
        </Center>
      </Flex>
    </>

  );
}
