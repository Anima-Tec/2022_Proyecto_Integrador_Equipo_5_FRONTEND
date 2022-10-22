import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import PropTypes from 'prop-types'; // ES6

function ModalBase({
  title, buttonText, buttonBgColor, buttonBgColorHover, content,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button _hover={{ bg: buttonBgColorHover }} bg={buttonBgColor} onClick={onOpen}>{buttonText}</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="bgColor">
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="bgColor">
            {content}
          </ModalBody>
          <ModalFooter bg="bgColor">
            <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose}>¡Entendido!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ModalBase.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonBgColor: PropTypes.string.isRequired,
  buttonBgColorHover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default ModalBase;
