import React from 'react';
import {
  Box, Center, Heading, Image, Link, Text, Wrap, WrapItem,
} from '@chakra-ui/react';

function SobreEquipo() {
  const studentPhoto = 'https://bit.ly/dan-abramov';

  return (

    <Box maxWidth="1000px" marginX="auto">
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={10}>Sobre el Equipo</Heading>

      <Box marginBottom={10}>
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

        <Wrap spacing="25px" justify="center" marginTop={6} maxWidth="900px" marginX="auto">
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center gap={2} w="165px" flexDirection="column">
              <Image src={studentPhoto} borderRadius="full" boxSize="100px" />
              <Center flexDirection="column">
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">Juan Pérez</Heading>
                <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Estudiante</Heading>
              </Center>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>

      <Box maxWidth="1000px" marginX="auto">
        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginBottom={4} textAlign="center" color="secondary">¿Cuál es nuestro interés?</Heading>
        <Text maxW="900px" textAlign="center" marginX="auto" marginTop={2}>
          Nuestro interés es grande. La idea nació 100% de nosotros y de nuestra realidad. En ÁNIMA, el liceo al que asistimos, se implementa la formación dual, prácticas laborales en empresas alineadas a lo que estamos estudiando.
          Como resultado de defender nuestra propuesta, no solo como proyecto final de curso sino también por interés propio en solucionar la problemática, estamos realmente involucrados en llevar a cabo la solución.
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

export default SobreEquipo;
