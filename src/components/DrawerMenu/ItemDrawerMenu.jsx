import React from 'react';
import ProtoTypes from 'prop-types';
import { Box, Center, Flex } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

function ItemDrawerMenu({
  name, route, icon, iconSelected, onClick,
}) {
  const location = useLocation();

  return (
    <Box mb={5} onClick={onClick}>
      <NavLink to={route}>
        <Flex>
          <Center color={((location.pathname === route) ? 'primary' : null)} gap={3}>
            {((location.pathname === route) ? iconSelected : icon)}
            <p>{name}</p>
          </Center>
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

export default ItemDrawerMenu;
