import React from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function SecondaryButton({
  childrenn, onClick, bg, fontColor,
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
      {childrenn}
    </Button>
  );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  childrenn: PropTypes.string,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  fontColor: PropTypes.string,
};

SecondaryButton.defaultProps = {
  childrenn: '',
  onClick: () => {},
  bg: 'secondaryDark',
  fontColor: 'white',
};
