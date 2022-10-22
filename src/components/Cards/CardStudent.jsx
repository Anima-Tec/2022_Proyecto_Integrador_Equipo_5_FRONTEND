import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Badge, Box, Button, Center, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routers/config/routes';

function CardStudent({ name, photo, interests }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box maxWidth="550px" onClick={onOpen} cursor="pointer">
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
              <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" key={interest} display="flex" alignContent="center" justifyContent="center">
                {interest}
              </Badge>
            ))}

          </Flex>

        </Box>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="bgColor">
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor">Información no disponible</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="bgColor">
            <Text>
              No puedes ver información de estos estudiantes. Solo puedes ver más información de aquellos que se postularon a tu oportunidad de práctica. ¡Publica una!
            </Text>
          </ModalBody>
          <ModalFooter bg="bgColor">
            <Box display={{ base: 'block', md: 'flex' }}>
              <Button variant="ghost" onClick={onClose}>Cancelar</Button>
              <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={() => [navigate(ROUTES.misPublicaciones), onClose()]}>
                Ir a Mis Publicaciones
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

CardStudent.propTypes = {
  name: ProtoTypes.string.isRequired,
  photo: ProtoTypes.string.isRequired,
  interests: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default CardStudent;
