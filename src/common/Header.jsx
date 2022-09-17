import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import DrawerMenu from './DrawerMenu';
import { ReactComponent as LogoEfect } from '../assets/logo-efect.svg';

function Header() {
  return (
    <Flex mb="40px">
      <DrawerMenu />
      <Center ml="30px">
        <LogoEfect />
      </Center>
    </Flex>
  );
}

export default Header;
