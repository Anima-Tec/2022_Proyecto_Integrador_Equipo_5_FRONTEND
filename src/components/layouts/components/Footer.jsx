import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex alignItems="end" justifyContent="center" h="90vh" paddingBottom="20px">
      <Text fontSize="xs" color="grey" align="center">
        Providing job opportunities since 2022
        <br />
        © 2022 EFECT All Rights Reserved
      </Text>
    </Flex>
  );
}

export default Footer;
