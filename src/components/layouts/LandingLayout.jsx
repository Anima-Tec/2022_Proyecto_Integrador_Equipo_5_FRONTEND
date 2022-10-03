import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function LandingLayout({ children }) {
  return (
    <Box width="100%" height="100vh">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
