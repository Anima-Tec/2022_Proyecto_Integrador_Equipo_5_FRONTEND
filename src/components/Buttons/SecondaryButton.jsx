import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function SecondaryButton({
  children, onClick, bg, fontColor, hover,
}) {
  return (
    <Button
      bg={bg}
      color={fontColor}
      _hover={{ bg: hover }}
      h="48px"
      w="100%"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  fontColor: PropTypes.string,
  hover: PropTypes.string,
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  bg: 'secondary',
  fontColor: 'white',
  hover: 'secondaryDark',
};
