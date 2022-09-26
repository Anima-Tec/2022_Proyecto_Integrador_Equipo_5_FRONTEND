import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import Header from '../sections/Header';

export default function LandingLayout({ children }) {
  return (
    <Box width="100%" height="100vh">
      <Header />
      {children}
    </Box>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
