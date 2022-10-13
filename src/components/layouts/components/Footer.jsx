import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <>
      <Divider h="3px" marginTop="50px" color="grey" opacity="0.2" />
      <Flex alignItems="end" marginTop="30px" justifyContent="center" paddingBottom="20px">
        <Text fontSize="xs" color="grey" align="center">
          Providing job opportunities since 2022
          <br />
          © 2022 EFECT All Rights Reserved
        </Text>
      </Flex>

    </>
  );
}

export default Footer;
