import React from 'react';
import ProtoTypes from 'prop-types';
import { Center, Flex } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

function ItemDrawerMenu({
  name, route, icon, iconSelected,
}) {
  const location = useLocation();

  return (
    <NavLink to="/">
      <Flex>
        <Center color={((location.pathname === route) ? 'primary' : null)} gap={3} mb={5}>
          {((location.pathname === route) ? iconSelected : icon)}
          {name}
        </Center>
      </Flex>
    </NavLink>
  );
}

ItemDrawerMenu.propTypes = {
  name: ProtoTypes.string.isRequired,
  route: ProtoTypes.string.isRequired,
  icon: ProtoTypes.element.isRequired,
  iconSelected: ProtoTypes.element.isRequired,
};

export default ItemDrawerMenu;
