import React from 'react';
import {
  AspectRatio, Box, Divider, Heading, Highlight, Text,
} from '@chakra-ui/react';

function Recursos() {
  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={8}>Recursos</Heading>
      <Text marginX="auto" textAlign="center" maxWidth="900px">A continuación te recomendamos una serie de videos de ayuda para prepararte para tu primera experiencia laboral 🥳</Text>
      <Text marginX="auto" textAlign="center" marginY={4} maxWidth="900px">
        <Highlight query="entrevista de trabajo" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
          Además, en unas semanas se contactará contigo vía mail un profesional del rubro laboral con quien tendrás una simulación de una entrevista de trabajo.
        </Highlight>
      </Text>
      <Text marginX="auto" textAlign="center" maxWidth="900px">Será una instancia más de preparación para ti, recibirás una devolución con aspectos de mejora para cuando tengas la entevista real.</Text>

      <Divider m="30px 0 40px 0" borderColor="gray" />

      <Box marginBottom={8}>
        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo elegir un trabajo?</Heading>
        <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EALRYl3WldA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </AspectRatio>
      </Box>

      <Divider my="40px" borderColor="gray" />

      <Box marginBottom={8}>
        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo elegir un trabajo?</Heading>
        <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EALRYl3WldA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </AspectRatio>
      </Box>

      <Divider my="40px" borderColor="gray" />

      <Box marginBottom={8}>
        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo elegir un trabajo?</Heading>
        <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EALRYl3WldA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </AspectRatio>
      </Box>

      <Divider my="40px" borderColor="gray" />

      <Box marginBottom={8}>
        <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo elegir un trabajo?</Heading>
        <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/EALRYl3WldA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </AspectRatio>
      </Box>

    </>

  );
}

export default Recursos;
