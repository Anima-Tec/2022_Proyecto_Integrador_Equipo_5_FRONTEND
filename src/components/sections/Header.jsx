import React from 'react';
import { Center, Flex } from '@chakra-ui/react';
import DrawerMenu from './DrawerMenu/DrawerMenu';
import { ReactComponent as LogoEfect } from '../../assets/logo-efect.svg';

function Header() {
  return (
    <Flex mb={19}>
      <DrawerMenu />
      <Center ml={10}>
        <LogoEfect />
      </Center>
    </Flex>
  );
}

export default Header;
