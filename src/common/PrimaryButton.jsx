import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function PrimaryButton({ children, onClick }) {
  return (
    <Button
      bg="primary"
      color="white"
      _hover={{
        bg: 'brand.600',
      }}
      h="48px"
      w="100%"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
};
