import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Center, Flex, Heading, Image,
} from '@chakra-ui/react';

export default function CardStudent({
  name, photo, interests, onClick,
}) {
  return (
    <Box maxWidth="550px" onClick={onClick} cursor="pointer">
      <Box borderWidth="1px" borderRadius="xl" overflow="hidden" borderColor="gray" boxShadow="dark-lg" p="18px" h="100%">

        <Flex>
          <Center gap={3} justifyContent="space-between" w="100%" alignItems="flex-start">

            <Flex>
              <Center gap={3}>
                <Image src={photo} borderRadius="full" boxSize={10} />
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{name}</Heading>
              </Center>
            </Flex>

          </Center>
        </Flex>

        <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">

          {interests.map((interest) => (
            <Badge
              key={interest}
              color="black"
              borderRadius="full"
              p="4px 6px 2px 6px"
              bg="secondaryDark"
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              {interest}
            </Badge>
          ))}

        </Flex>

      </Box>
    </Box>
  );
}

CardStudent.propTypes = {
  name: ProtoTypes.string.isRequired,
  photo: ProtoTypes.string.isRequired,
  interests: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
  onClick: ProtoTypes.func.isRequired,
};
