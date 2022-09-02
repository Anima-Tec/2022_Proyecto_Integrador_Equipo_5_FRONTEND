import React from 'react';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <>
      <Box m={2}>
        Tomato
      </Box>
      <Box maxW="960px" mx="auto" />
      <Box m={[2, 3]} />
      <div>App</div>
    </>
  );
}
