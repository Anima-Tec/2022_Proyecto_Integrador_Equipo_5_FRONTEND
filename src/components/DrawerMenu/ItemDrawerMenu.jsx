import React from 'react';
import ProtoTypes from 'prop-types';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

export default function ItemDrawerMenu({
  name, route, icon, iconSelected, onClick,
}) {
  const location = useLocation();

  return (
    <Box mb={4} onClick={onClick}>
      <NavLink to={route}>
        <Flex color={((location.pathname === route) ? 'primary' : null)} gap={3} alignItems="flex-end">
          {((location.pathname === route) ? iconSelected : icon)}
          <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold">{name}</Heading>
        </Flex>

      </NavLink>
    </Box>
  );
}

ItemDrawerMenu.propTypes = {
  name: ProtoTypes.string.isRequired,
  route: ProtoTypes.string.isRequired,
  icon: ProtoTypes.element.isRequired,
  iconSelected: ProtoTypes.element.isRequired,
  onClick: ProtoTypes.func,
};

ItemDrawerMenu.defaultProps = {
  onClick: () => {},
};
