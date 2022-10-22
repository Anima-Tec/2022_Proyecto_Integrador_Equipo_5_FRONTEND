/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  AspectRatio, Box, Divider, Heading, Highlight, Text,
} from '@chakra-ui/react';

function Recursos() {
  return (

    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" marginBottom={8}>Recursos</Heading>
      <Text marginX="auto" textAlign="center" maxWidth="700px">A continuación te recomendamos una serie de videos de ayuda para prepararte para tu primera experiencia laboral 🥳</Text>
      <Text marginX="auto" textAlign="center" marginY={4} maxWidth="700px">
        <Highlight query="entrevista de trabajo" styles={{ fontWeight: 'bold', textColor: 'secondary' }}>
          Además, en unas semanas se contactará contigo vía mail un profesional del rubro laboral con quien tendrás una simulación de una entrevista de trabajo.
        </Highlight>
      </Text>
      <Text marginX="auto" textAlign="center" maxWidth="700px">Será una instancia más de preparación para ti, recibirás una devolución con aspectos de mejora para cuando tengas la entevista real.</Text>

      <Divider m="30px 0 40px 0" borderColor="gray" />

      <Box id="videos">
        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Que trabajo es el ideal para mi?</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EALRYl3WldA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Divider my="40px" borderColor="gray" />

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo me preparo para una entrevista de trabajo?</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5al8cq6Isdk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Divider my="40px" borderColor="gray" />

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Cómo organizar tareas en el trabajo?</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EMY4IB45Wjo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Divider my="40px" borderColor="gray" />

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">¿Qué comportamiento debo tener en el trabajo?</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/j3PQ0xJ6V4g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Divider my="40px" borderColor="gray" />

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">5 Cosas que NO debes hacer en una entrevista de trabajo</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l-m4pLDq4Qg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Divider my="40px" borderColor="gray" />

        <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign="center" margin="20px auto">Sección: ¿Cómo respondo a...?</Heading>

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">"¿Por qué debo contratarte?"</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GmV32eDJkro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">"Háblame de ti"</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XtCOSpIC4gA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">Y si no tengo experiencia ¿qué respondo?</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oeWe3AJ932w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

        <Box marginBottom={8}>
          <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold" marginBottom={6} textAlign="center">"¿Cuál es tu debilidad?"</Heading>
          <AspectRatio maxW="560px" ratio={16 / 9} marginX="auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/D6LIcP-Nr5U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </AspectRatio>
        </Box>

      </Box>
    </>

  );
}

export default Recursos;
