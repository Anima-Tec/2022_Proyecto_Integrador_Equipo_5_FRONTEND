import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function LandingLayout({ children }) {
  return (
    <>
      <Box
        width={{
          base: '100%', md: '100%', lg: '85%',
        }}
        height="100vh"
        margin="auto"
      >
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
