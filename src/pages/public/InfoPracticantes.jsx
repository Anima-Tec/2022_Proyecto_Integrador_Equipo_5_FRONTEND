import React from 'react';
import {
  Box, Heading, Highlight, Link, Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routers/config/routes';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

function InfoPracticantes() {
  const navigate = useNavigate();
  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Practicantes</Heading>

      <Box maxWidth="800px" marginX="auto">
        <Box marginY={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="left" marginX="auto">
            ¿Quiénes son los Practicantes?
          </Heading>
          <Text textAlign="left" marginX="auto">
            <Highlight query={['gratuito']} styles={{ fontWeight: 'bold', color: 'primary' }}>
              Son estudiantes registrados y aprobados en la plataforma. Para ser aprobados necesitan tener entre 15 y 25 años, un promedio de 8 o más, pertenecer a cualquier centro educativo y que no hayan tenido experiencia laboral previa. Es totalmente gratuito pertenecer a la plataforma siendo estudiante. Los practicantes son quienes aplican sus conocimientos dentro del mundo del trabajo, o también aprender sobre el área de su interes, a través de una pasantía en una empresa comprometida con el desarrollo de talento joven.
            </Highlight>
          </Text>
        </Box>
        <Box marginY={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="right" marginX="auto">
            Beneficios
          </Heading>
          <Text textAlign="right" marginX="auto">
            Se espera que mejoren sus habilidades blandas, como la comunicación, el trabajo en equipo, la capacidad de resolver problemas y sobre todo la autonomía. También se espera que el estudiante mejore su promedio ya que aumentará su motivación por tener un objetivo claro que alcanzar.
          </Text>
        </Box>

        <Box marginTop={10}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={3} color="secondary" textAlign="left" marginX="auto">¿Qué deben esperar de la empresa?</Heading>
          <Text textAlign="left" marginX="auto">
            La empresa les brindará las herramientas y el apoyo necesario para que este proceso sea provechoso.
            Tendran un tutor asignado por parte la empresa que te guiará en el proceso de aprendizaje y te ayudará a resolver cualquier duda que tengas.
          </Text>
        </Box>
        <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={6}>
          ¿Quieres ser parte?
          {' '}
          <PrimaryButton onClick={() => navigate(ROUTES.register)} w="100px">Inscribite</PrimaryButton>
        </Heading>
        <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="medium" textAlign="center" maxWidth="700px" margin="auto" marginTop={12}>
          En caso de que tengas preguntas puedes contactarte con nosotros
          {' '}
          <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
            somosefect@gmail.com
          </Link>
        </Heading>
      </Box>
    </>
  );
}

export default InfoPracticantes;
