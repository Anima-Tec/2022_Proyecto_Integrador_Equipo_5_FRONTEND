// información sobre cada oportunidad de practica
// -------------------------------------------------------------------------------------------------

import React from 'react';
import {
  Badge, Box, Center, Divider, Flex, Heading, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Button, useDisclosure, Image, Wrap, WrapItem,
} from '@chakra-ui/react';
import * as Logo from '../../assets/icons/index';
import CardStudent from '../../components/Cards/CardStudent';

export default function MiPublicacion() {
  const oportunity = {
    name_jobOffer: 'Programación',
    description: 'Buscamos estudiantes con interés en desarrollar aplicaciones web',
    modality: 'Mixta',
    quotas: 2,
    workArea: 'Tecnología',
    company: {
      name_company: 'Light IT',
      photo: 'https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b312c922ab60b210e9b75c09ec84731f.png?VersionId=HhmnMtgPVc3o1fGY4XZrgaQp0QQiwL_O',
    },
    apply: [
      {
        name: 'Juan Pérez',
        photo: 'https://bit.ly/dan-abramov',
        birthDate: '01/01/2001',
        highSchool: 'Liceo N°1',
        description: 'Soy estudiante de Ingeniería de Sistemas y me interesa la programación',
        email: 'juanperez@gmail.com',
        phone: '987654321',
        interests: ['Ingeniería', 'Tecnología'],
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
    ],
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <>
      <Box>

        <Box>

          <Flex alignItems="center" marginBottom={3} gap={1.5} flexWrap="wrap">
            <Badge color="black" borderRadius="full" p="4px 6px 2px 6px" bg="secondaryDark" display="flex" alignContent="center" justifyContent="center">
              {oportunity.workArea}
            </Badge>
          </Flex>

          <Box>
            <Heading as="h1" fontFamily="Raleway" fontSize="4xl" fontWeight="extraBold" textAlign="left">
              {oportunity.name_jobOffer}
            </Heading>
          </Box>

          <Flex gap={5} marginTop={3}>
            <Box>
              <Heading as="h5" fontFamily="Poppins" fontSize="xs" fontWeight="bold">
                Cupos
              </Heading>
              <Flex justifyContent="center">
                <Center gap={1}>
                  <Logo.People width="15px" />
                  <Text>{oportunity.quotas}</Text>
                </Center>
              </Flex>
            </Box>

            <Box>
              <Heading as="h5" fontFamily="Poppins" fontSize="xs" fontWeight="bold">
                Modalidad
              </Heading>
              <Flex marginTop="3px">
                <Center gap={1}>
                  {oportunity.modality === 'Virtual' && (
                  <>
                    <Logo.Computer width="17px" />
                    <Text>{oportunity.modality}</Text>
                  </>
                  )}
                  {oportunity.modality === 'Presencial' && (
                  <>
                    <Logo.Empresas width="15px" />
                    <Text>{oportunity.modality}</Text>
                  </>
                  )}
                  {oportunity.modality === 'Mixta' && (
                  <>
                    <Logo.Computer width="12px" height="12px" />
                    <Logo.Empresas width="10px" height="10px" />
                    <Text>{oportunity.modality}</Text>
                  </>
                  )}
                </Center>
              </Flex>
            </Box>

          </Flex>

          <Box marginTop="24px">
            <Box marginBottom={2}>
              <Heading as="h5" fontFamily="Poppins" fontSize="md" fontWeight="bold">Descripción</Heading>
            </Box>
            <Text maxWidth="800px">{oportunity.description}</Text>
          </Box>

        </Box>

        <Divider h="3px" marginTop={5} color="gray" opacity="0.2" />

        <Box marginTop="24px">

          <Box marginBottom={2}>
            <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" textAlign={{ sm: 'center', md: 'left' }}>Postulados</Heading>
          </Box>

          <Wrap marginTop={6} spacing={4}>
            {oportunity.apply.map((student) => (
              <WrapItem w={{ sm: '100%', md: '40%', lg: '40%' }} justifyContent={{ sm: 'center', md: 'flex-start' }}>
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
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="bgColor" size="md">
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader paddingTop={10} bg="bgColor" paddingBottom={0}>
            <Flex>
              <Center gap={3}>
                <Image src={oportunity.apply[0].photo} borderRadius="full" boxSize={10} />
                <Heading as="h3" fontFamily="Poppins" fontSize="xl" fontWeight="bold">{oportunity.apply[0].name}</Heading>
              </Center>
            </Flex>
            <Flex alignItems="center" marginTop={3} gap={1.5} flexWrap="wrap" marginBottom={3}>
              {oportunity.apply[0].interests.map((interest) => (
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
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody bg="bgColor" paddingTop={0}>
            <Flex>
              <Center gap={2}>
                <Logo.Date width="15px" />
                <Text>{oportunity.apply[0].birthDate}</Text>
              </Center>
            </Flex>

            <Flex>
              <Center gap={2}>
                <Logo.Practicantes width="15px" />
                <Text>{oportunity.apply[0].highSchool}</Text>
              </Center>
            </Flex>

            <Box marginY={3}>
              <Heading as="h5" fontFamily="Poppins" fontSize="sm" fontWeight="bold" marginBottom={2}>Descripción</Heading>
              <Text>
                {oportunity.apply[0].description}
              </Text>
            </Box>

            <Flex>
              <Center gap={2}>
                <Logo.Phone width="15px" />
                <Text>{oportunity.apply[0].phone}</Text>
              </Center>
            </Flex>

            <Flex>
              <Center gap={2}>
                <Logo.Email width="15px" />
                <Text>{oportunity.apply[0].email}</Text>
              </Center>
            </Flex>

          </ModalBody>

          <ModalFooter bg="bgColor" paddingY={6}>
            <Button variant="ghost" onClick={onClose}>Cerrar</Button>
            <Button _hover={{ bg: 'primaryDark' }} bg="primary" onClick={onClose}>
              Descargar CV
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  );
}
