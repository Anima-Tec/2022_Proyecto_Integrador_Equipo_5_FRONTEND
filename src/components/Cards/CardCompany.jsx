import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Center, Flex, Heading, Image, Text,
} from '@chakra-ui/react';
import * as Logo from '../../assets/icons/index';
import ROUTES from '../../routers/config/routes';

export default function CardCompany({
  name, photo, employees, yearFoundation, nameWorkArea,
}) {
  return (
    <Box w="100%">
      <a href={ROUTES.empresaPage}>
        <Box borderWidth="1px" borderRadius="xl" overflow="hidden" borderColor="gray" boxShadow="dark-lg" p="18px" h="100%">

          <Flex>
            <Center gap={3} justifyContent="space-between" w="100%" alignItems="flex-start">

              <Flex>
                <Center gap={3} maxWidth="180px" wordBreak="break-word">
                  <Image src={photo} borderRadius="full" boxSize={10} />
                  <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{name}</Heading>
                </Center>
              </Flex>

              <Flex marginY="auto" flexDirection="column" alignItems="flex-end">
                <Flex>
                  <Center gap={1}>
                    <Text>{employees}</Text>
                    <Logo.People width="15px" />
                  </Center>
                </Flex>
                <Flex>
                  <Center gap={1}>
                    <Text>{yearFoundation}</Text>
                    <Logo.Date width="15px" />
                  </Center>
                </Flex>
              </Flex>

            </Center>
          </Flex>

          <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">

            {console.log(nameWorkArea)}
            {nameWorkArea.map((workarea) => (
              <Badge
                key={workarea}
                color="black"
                borderRadius="full"
                p="4px 6px 2px 6px"
                bg="secondaryDark"
                display="flex"
                alignContent="center"
                justifyContent="center"
              >
                {workarea.workarea.name_work_area}
              </Badge>
            ))}

          </Flex>

        </Box>
      </a>
    </Box>
  );
}

CardCompany.propTypes = {
  name: ProtoTypes.string.isRequired,
  photo: ProtoTypes.string.isRequired,
  employees: ProtoTypes.number.isRequired,
  yearFoundation: ProtoTypes.string.isRequired,
  nameWorkArea: ProtoTypes.arrayOf(ProtoTypes.string),
};

CardCompany.defaultProps = {
  nameWorkArea: [],
};
