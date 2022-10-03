import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import DrawerMenu from './DrawerMenu/DrawerMenu';
import { ReactComponent as LogoEfect } from '../../assets/logo-efect.svg';

function Header() {
  return (
    <>
      <Box w="100%" position="absolute" my="5px" zIndex={1}>
        <DrawerMenu />
      </Box>
      <Flex position="relative" justifyContent="center" mb={8}>
        <LogoEfect />
      </Flex>
    </>
  );
}

export default Header;
