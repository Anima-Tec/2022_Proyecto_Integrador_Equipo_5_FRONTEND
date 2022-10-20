import React from 'react';
import PropTypes from 'prop-types';
import { Box, VStack } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function LandingLayout({ children }) {
  return (
    <VStack height="100vh">
      <Box
        width={{
          base: '100%', md: '100%', lg: '85%',
        }}
        marginX="auto"
        height="100%"
      >
        <Header />
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
