import React from 'react';
import { Divider, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Divider h="3px" marginTop="10%" color="gray" opacity="0.2" />
      <Flex alignItems="end" marginTop="30px" justifyContent="center" paddingBottom="20px">
        <Text fontSize="xs" color="gray" align="center">
          Providing job opportunities since 2022
          <br />
          © 2022 EFECT All Rights Reserved
        </Text>
      </Flex>

    </>
  );
}
