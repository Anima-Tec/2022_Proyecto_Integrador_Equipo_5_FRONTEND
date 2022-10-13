// información sobre cada empresa
// -------------------------------------------------------------------------------------------------

import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

function PerfilEmpresa() {
  return (
    <>
      <Heading>
        <Center>
          <h1>Empresa: name</h1>
        </Center>
      </Heading>

      <Box bg="red">
        <p>Box 1</p>
      </Box>

    </>
  );
}

export default PerfilEmpresa;
