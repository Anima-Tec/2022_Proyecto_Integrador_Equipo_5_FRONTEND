import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';

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
