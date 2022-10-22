// listado de todos los practicantes que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import CardStudent from '../../components/Cards/CardStudent';

function Practicantes() {
  const students = [
    {
      name: 'Juan Pérez',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Administración', 'Tecnología'],
    },
    {
      name: 'Ana López',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Tecnología', 'Cubos de rubik'],
    },
    {
      name: 'Pedro García',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Comida', 'Marketing'],
    },
  ];
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Practicantes </Heading>
      <Box>
        <Box margin="10px auto 40px auto">
          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginX="auto" textAlign="center">Aprobados en la plataforma</Heading>
        </Box>

        <SimpleGrid spacing={8} minChildWidth="240px">

          {students.map((student) => (
            <CardStudent
              name={student.name}
              photo={student.photo}
              interests={student.interests}
            />
          ))}

        </SimpleGrid>
      </Box>
    </>
  );
}

export default Practicantes;
