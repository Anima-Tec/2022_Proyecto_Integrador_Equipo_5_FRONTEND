/* eslint-disable no-import-assign */
/* eslint-disable no-return-assign */
import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export default function ModalApply() {
  // const { mutateAsync } = useLogin();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const handleSubmit = async (data) => {
  //   try {
  //     await mutateAsync(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onOpen} p={6} w={{ sm: '100%', md: '50%', lg: '25%' }}>Postularme</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor" paddingY={10}>Postulación</ModalHeader>

          <ModalCloseButton />

          <ModalBody bg="bgColor">
            Subir el cv
            {/* EMIII */}
            {/* - CV (input type: upload file) */}
          </ModalBody>

          <ModalFooter bg="bgColor" paddingY={6}>
            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
            <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose} type="submit" w="150px">Postularme</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
}
