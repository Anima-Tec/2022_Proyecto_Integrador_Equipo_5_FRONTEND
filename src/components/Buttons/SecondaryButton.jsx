import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function SecondaryButton({
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

export default SecondaryButton;

SecondaryButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  fontColor: PropTypes.string,
};

SecondaryButton.defaultProps = {
  onClick: () => {},
  bg: 'secondaryDark',
  fontColor: 'white',
};
