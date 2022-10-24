// listado de todos los practicantes que coindicen empresa.rubro = practicante.intereses
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Box, Heading, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Button, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CardStudent from '../../components/Cards/CardStudent';
import ROUTES from '../../routers/config/routes';

export default function Practicantes() {
  const students = [
    {
      name: 'Juan Pérez',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Administración', 'Tecnología'],
    },
    {
      name: 'Ana López',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Tecnología', 'Cubos de rubik'],
    },
    {
      name: 'Pedro García',
      photo: 'https://bit.ly/dan-abramov',
      interests: ['Comida', 'Marketing'],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold">Practicantes </Heading>
      <Box>
        <Box margin="10px auto 40px auto">
          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginX="auto" textAlign="center">Aprobados en la plataforma</Heading>
        </Box>

        <Wrap marginTop={6} spacing={4} justify="center">
          {students.map((student) => (
            <WrapItem w={{ sm: '100%', md: '40%', lg: '40%' }} justifyContent="center">
              <CardStudent
                key={student.name}
                name={student.name}
                photo={student.photo}
                interests={student.interests}
                onClick={onOpen}
              />
            </WrapItem>
          ))}
        </Wrap>

      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="bgColor">
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor">Información no disponible</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="bgColor">
            <Text>
              No puedes ver información de estos estudiantes. Solo puedes ver más información de aquellos que se postularon a una de tus Oportunidades de Práctica. ¡Publica una!
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
