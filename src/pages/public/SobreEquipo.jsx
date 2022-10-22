import React from 'react';
import {
  Box, Center, Heading, Image, Link, Text, Wrap, WrapItem,
} from '@chakra-ui/react';
import Avril from '../../assets/our-photos/Avril.jpeg';
import Camila from '../../assets/our-photos/Camila.jpg';
import Veronica from '../../assets/our-photos/Veronica.jpeg';
import Nicolas from '../../assets/our-photos/Nicolas.jpeg';
import Agustin from '../../assets/our-photos/Agustin.jpeg';
import Iliana from '../../assets/our-photos/Iliana.jpeg';
import Emiliano from '../../assets/our-photos/Emiliano.jpeg';

import Default from '../../assets/our-photos/Default.webp';

export default function SobreEquipo() {
  const team = [
    {
      name: 'Verónica Morgades',
      orientation: 'Tecnología',
      photo: Veronica,
    },
    {
      name: 'Camila Pérez',
      orientation: 'Tecnología',
      photo: Camila,
    },
    {
      name: 'Emiliano Hernández',
      orientation: 'Tecnología',
      photo: Emiliano,
    },
    {
      name: 'Nicolás Barreto',
      orientation: 'Tecnología',
      photo: Nicolas,
    },
    {
      name: 'Avril Cornacchione',
      orientation: 'Administración',
      photo: Avril,
    },
    {
      name: 'Agustín Barreto',
      orientation: 'Administración',
      photo: Agustin,
    },
    {
      name: 'Iliana Pais',
      orientation: 'Administración',
      photo: Iliana,
    },
    {
      name: 'Franco Picarelli',
      orientation: 'Administración',
      photo: Default,
    },

  ];

  return (

    <Box maxWidth="1000px" marginX="auto">
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={10}>Sobre el Equipo</Heading>

      <Box marginBottom={14}>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={2} textAlign="center" color="secondary">
          Nosotros somos...
        </Heading>
        <Text maxW="900px" textAlign="center" marginX="auto">
          Somos 8 estudiantes de
          {' '}
          <Link textDecoration="underline" fontWeight="semibold" textColor="primary" href="www.anima.edu.uy">
            ÁNIMA - Bachillerato Tecnológico
          </Link>
          . 4 de nosotros estudia tecnología y 4 administración, nos encontramos en 6to año y estamos unidos por ser parte del mismo grupo para desarrollar el proyecto final del curso.
        </Text>

        <Wrap spacing="40px" justify="center" alignItems="center" marginTop={12} marginX="auto" maxWidth="800px">

          {team.map((member) => (
            <WrapItem key={member.name} w="150px" justifyContent="center">
              <Center flexDirection="column">
                <Image
                  src={member.photo}
                  borderRadius="full"
                  boxSize="120px"
                  objectFit="cover"
                  alt={member.name}
                />
                <Heading as="h3" fontFamily="Poppins" fontSize="lg" fontWeight="bold" marginTop={2} textAlign="center">{member.name}</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold" marginTop={1}>{member.orientation}</Heading>
              </Center>
            </WrapItem>
          ))}

        </Wrap>
      </Box>

      <Box maxWidth="1000px" marginX="auto">
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={4} textAlign="center" color="secondary">¿Como nació la idea?</Heading>
        <Text maxW="900px" textAlign="center" marginX="auto" marginTop={2}>
          La idea nació 100% de nosotros y de nuestra realidad. En ÁNIMA, el liceo al que asistimos, se implementa la formación dual, prácticas laborales en empresas alineadas a lo que estamos estudiando.
          Como resultado de defender nuestra propuesta, no solo como proyecto final de curso sino también por interés propio en solucionar la problemática, estamos realmente involucrados en llevar a cabo la solución.
        </Text>
      </Box>

      <Box maxWidth="1000px" marginX="auto" marginTop={8}>
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={4} textAlign="center" color="secondary">¿Qué nos motiva?</Heading>
        <Text maxW="900px" textAlign="center" marginX="auto" marginTop={2}>
          Lo que nos motiva a seguir trabajando en EFECT es poder cambiar la situación de muchos estudiantes, ya que nosotros tuvimos la oportunidad de realizar nuestras pasantías en empresas y aplicar los conocimientos que adquirimos en clase y luego podíamos aplicar los conocimientos que adquirimos en la práctica en clase.  Como nosotros tuvimos la oportunidad de vivir esa experiencia queremos brindarle la oportunidad a otros estudiantes la posibilidad de tener la oportunidad de tener su primera experiencia laboral.
        </Text>
      </Box>

      <Heading as="h3" fontFamily="Raleway" fontSize="xl" fontWeight="bold" textAlign="center" margin="auto" marginTop={6}>
        Para saber más sobre nosotros o si tienes dudas puedes contactarnos a través de
        {' '}
        <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
          somosefect@gmail.com
        </Link>
      </Heading>
    </Box>
  );
}
