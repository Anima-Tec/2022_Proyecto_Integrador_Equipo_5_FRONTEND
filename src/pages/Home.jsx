import React from 'react';
import { Heading } from '@chakra-ui/react';
import Header from '../common/Header';
import Footer from '../common/Footer';

function Home() {
  return (
    <>
      <Header />
      <Heading>{process.env.REACT_APP_VARIABLE}</Heading>
      <Footer />
    </>
  );
}

export default Home;
