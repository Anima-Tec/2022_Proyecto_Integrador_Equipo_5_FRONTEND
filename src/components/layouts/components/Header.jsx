import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import DrawerMenu from '../../DrawerMenu/DrawerMenu';
import * as Logo from '../../../assets/icons/index';
import ROUTES from '../../../routers/config/routes';

export default function Header() {
  return (
    <Box position="sticky" paddingTop="20px" paddingBottom="16px" bg="bgColor" top="0" marginBottom="20px" id="header">
      <Box position="absolute" my="5px" zIndex="1">
        <DrawerMenu />
      </Box>
      <Flex position="relative" justifyContent="center" zIndex="0">
        <a href={ROUTES.home}>
          <Logo.LogoEfect />
        </a>
      </Flex>
    </Box>
  );
}
