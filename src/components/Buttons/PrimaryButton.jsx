import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function PrimaryButton({
  children, onClick, bg, fontColor, hover, cursor, w,
}) {
  return (
    <Button
      bg={bg}
      color={fontColor}
      _hover={{ bg: hover }}
      h="48px"
      w={w}
      onClick={onClick}
      cursor={cursor}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  fontColor: PropTypes.string,
  hover: PropTypes.string,
  cursor: PropTypes.string,
  w: PropTypes.string,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  bg: 'primary',
  fontColor: 'white',
  hover: 'primaryDark',
  cursor: 'pointer',
  w: '100%',
};
