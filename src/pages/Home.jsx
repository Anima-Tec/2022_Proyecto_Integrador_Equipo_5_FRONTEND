import React from 'react';
import { Heading } from '@chakra-ui/react';
import DrawerMenu from '../components/DrawerMenu';
// import { ROUTES } from '../constants/routes';

function Home() {
  return (
    <>
      <DrawerMenu />
      <Heading>Somos EFECT</Heading>
    </>
  );
}

export default Home;