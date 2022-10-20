/* eslint-disable camelcase */
import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Center, Flex, Image,
} from '@chakra-ui/react';
import * as Logo from '../assets/index';
import ROUTES from '../routers/config/routes';

function ItemCompany({
  name, photo, employees, year_foundation, name_work_area,
}) {
  return (
    <a href={ROUTES.STUDENT.COMPANY_PROFILE}>
      <Box borderWidth="1px" borderRadius="xl" overflow="hidden" borderColor="grey" padding="14px" boxShadow="md" p="6" h="100%" href={ROUTES.perfilEmpresa}>

        <Flex>
          <Center gap={3} justifyContent="space-between" w="100%" alignItems="flex-start">

            <Flex>
              <Center gap={3} maxWidth="180px" wordBreak="break-word">
                <Image src={photo} borderRadius="full" boxSize={10} />
                <h3>{name}</h3>
              </Center>
            </Flex>

            <Flex marginY="auto" flexDirection="column" alignItems="flex-end">
              <Flex>
                <Center gap={1}>
                  <p>{employees}</p>
                  <Logo.People width="15px" />
                </Center>
              </Flex>
              <Flex>
                <Center gap={1}>
                  <p>{year_foundation}</p>
                  <Logo.Date width="15px" />
                </Center>
              </Flex>
            </Flex>

          </Center>
        </Flex>

        <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">

          {name_work_area.map((interest) => (
            <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={interest} display="flex" alignContent="center" justifyContent="center">
              {interest}
            </Badge>
          ))}

        </Flex>

      </Box>
    </a>
  );
}

ItemCompany.propTypes = {
  name: ProtoTypes.string.isRequired,
  photo: ProtoTypes.string.isRequired,
  employees: ProtoTypes.number.isRequired,
  year_foundation: ProtoTypes.number.isRequired,
  name_work_area: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default ItemCompany;
