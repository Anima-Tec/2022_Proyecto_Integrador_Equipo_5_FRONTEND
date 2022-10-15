/* eslint-disable camelcase */
import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Center, Flex, Image, Text,
} from '@chakra-ui/react';
import * as Logo from '../../assets/index';
import ROUTES from '../../routers/config/routes';

function CardJobOffer({
  name_jobOffer, description, modality, quotas, workarea, name_company, photo,
}) {
  return (
    // minChildWidth="400px" display={{ base: 'none', lg: 'grid' }}
    <Box>
      <a href={ROUTES.perfilEmpresa}>
        <Box borderWidth="1px" borderRadius="xl" overflow="hidden" borderColor="gray" boxShadow="md" p={{ base: 4, md: 6 }} h="100%">

          <Flex display={{ base: 'block', lg: 'flex' }}>
            <Center gap="10px" justifyContent="space-between" w="100%" alignItems="flex-end">

              <Box>
                <Flex marginBottom={2}>
                  <Center gap={3}>
                    <Image src={photo} borderRadius="full" boxSize={8} />
                    <h4>{name_company}</h4>
                  </Center>
                </Flex>

                <h3>{name_jobOffer}</h3>
              </Box>

              <Flex flexDirection="column" alignItems="flex-end">
                <Flex>
                  <Center gap={1}>
                    <p>{quotas}</p>
                    <Logo.People width="15px" />
                  </Center>
                </Flex>

                {modality === 'Virtual' && (
                  <Flex>
                    <Center gap={1}>
                      <p>{modality}</p>
                      <Logo.Computer width="17px" />
                    </Center>
                  </Flex>
                )}

                {modality === 'Presencial' && (
                <Flex>
                  <Center gap={1}>
                    <p>{modality}</p>
                    <Logo.Empresas width="15px" />
                  </Center>
                </Flex>
                )}

                {modality === 'Mixta' && (
                  <Flex>
                    <Center gap={1}>
                      <p>Mixta</p>

                      <Logo.Computer width="12px" height="12px" />
                      <Logo.Empresas width="10px" height="10px" />

                    </Center>
                  </Flex>
                )}
              </Flex>
            </Center>
          </Flex>
          <Text fontSize={12} marginTop={3}>{description}</Text>

          <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap">
            <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={workarea} display="flex" alignContent="center" justifyContent="center">
              {workarea}
            </Badge>
          </Flex>

        </Box>
      </a>
    </Box>
  );
}

CardJobOffer.propTypes = {
  name_jobOffer: ProtoTypes.string.isRequired,
  description: ProtoTypes.string.isRequired,
  modality: ProtoTypes.string.isRequired,
  quotas: ProtoTypes.number.isRequired,
  workarea: ProtoTypes.string.isRequired,
  name_company: ProtoTypes.string.isRequired,
  photo: ProtoTypes.string.isRequired,
};

export default CardJobOffer;
