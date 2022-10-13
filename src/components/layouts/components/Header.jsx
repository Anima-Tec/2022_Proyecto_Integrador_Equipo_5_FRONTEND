import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import DrawerMenu from '../../DrawerMenu/DrawerMenu';
import { ReactComponent as LogoEfect } from '../../../assets/logo-efect.svg';
import ROUTES from '../../../routers/config/routes';

function Header() {
  return (
    <Box position="sticky" paddingTop="20px" paddingBottom="16px" bg="bgColor" top="0" marginBottom="20px">
      <Box position="absolute" my="5px" zIndex="1">
        <DrawerMenu />
      </Box>
      <Flex position="relative" justifyContent="center" zIndex="0">
        <a href={ROUTES.home}>
          <LogoEfect />
        </a>
      </Flex>
    </Box>
  );
}

export default Header;
