import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function PrimaryButton({
  children, onClick, bg, fontColor,
}) {
  return (
    <Button
      bg={bg}
      color={fontColor}
      _hover={{
        bg: { bg },
      }}
      _active={{
        bg: { bg },
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  fontColor: PropTypes.string,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  bg: 'primaryDark',
  fontColor: 'white',
};
