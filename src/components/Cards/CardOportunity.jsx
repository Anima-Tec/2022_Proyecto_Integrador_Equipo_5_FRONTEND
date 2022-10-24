import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Center, Flex, Heading, Image, Text,
} from '@chakra-ui/react';
import * as Logo from '../../assets/icons/index';

export default function CardOportunity({
  nameOportunity, description, modality, quotas, workArea, nameCompany, photo, onClick,
}) {
  return (

    <Box w="100%" onClick={onClick} cursor="pointer" borderWidth="1px" borderRadius="xl" overflow="hidden" borderColor="gray" boxShadow="dark-lg" p={{ base: 4, md: '18px' }} h="100%">

      <Flex display={{ base: 'block', lg: 'flex' }}>
        <Center gap="10px" justifyContent="space-between" w="100%" alignItems="flex-start">

          <Box marginY="auto">
            {(nameCompany && photo) && (
            <Flex marginBottom={2}>
              <Center gap={3}>
                <Image src={photo} borderRadius="full" boxSize={8} />
                <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold">{nameCompany}</Heading>
              </Center>
            </Flex>
            )}

            <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{nameOportunity}</Heading>
          </Box>

          <Flex flexDirection="column" alignItems="flex-end">
            <Flex>
              <Center gap={1}>
                <Text>{quotas}</Text>
                <Logo.People width="15px" />
              </Center>
            </Flex>

            {modality === 'Virtual' && (
              <Flex>
                <Center gap={1}>
                  <Text>{modality}</Text>
                  <Logo.Computer width="17px" />
                </Center>
              </Flex>
            )}

            {modality === 'Presencial' && (
            <Flex>
              <Center gap={1}>
                <Text>{modality}</Text>
                <Logo.Empresas width="15px" />
              </Center>
            </Flex>
            )}

            {modality === 'Mixta' && (
              <Flex>
                <Center gap={1}>
                  <Text>Mixta</Text>

                  <Logo.Computer width="12px" height="12px" />
                  <Logo.Empresas width="10px" height="10px" />

                </Center>
              </Flex>
            )}
          </Flex>
        </Center>
      </Flex>
      <Text fontSize={12} marginTop={3} noOfLines={2}>{description}</Text>

      <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">
        <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={workArea} display="flex" alignContent="center" justifyContent="center">
          {workArea}
        </Badge>
      </Flex>

    </Box>
  );
}

CardOportunity.propTypes = {
  nameOportunity: ProtoTypes.string.isRequired,
  description: ProtoTypes.string.isRequired,
  modality: ProtoTypes.string.isRequired,
  quotas: ProtoTypes.number.isRequired,
  workArea: ProtoTypes.string.isRequired,
  nameCompany: ProtoTypes.string,
  photo: ProtoTypes.string,
  onClick: ProtoTypes.func.isRequired,
};

CardOportunity.defaultProps = {
  nameCompany: '',
  photo: '',
};
