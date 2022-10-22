import React from 'react';
import {
  UnorderedList, ListItem, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure,
} from '@chakra-ui/react';

function ModalRequisitos() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onOpen}>Ver requisitos</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor">Requisitos</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="bgColor">
            <UnorderedList>
              <ListItem>Tener entre 15 y 25 años</ListItem>
              <ListItem>Ser estudiante</ListItem>
              <ListItem>Tener 8 o más de promedio</ListItem>
              <ListItem>No haber tenido experiencia laboral previa</ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter bg="bgColor">
            <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose}>¡Entendido!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalRequisitos;
