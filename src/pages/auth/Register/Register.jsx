/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import {
  Button, Flex, Heading, useDisclosure, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Link, Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/Form';
import RegisterStudentSchema from '../../../lib/schemas/auth/registerStudent.schema';
import useRegisterStudent from '../../../hooks/auth/mutations/useRegisterStudent';
import InputField from '../../../components/Fields/InputField';
import ROUTES from '../../../routers/config/routes';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

function Register() {
  const { mutateAsync } = useRegisterStudent();
  const [loader, setLoader] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      setLoader(true);
      await mutateAsync(data);
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  return (
    <>
      <VStack spacing={8} height="100%" width="100%">
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as="h1"
            size="xl"
            fontWeight="extrabold"
            textAlign="center"
          >
            Registro
          </Heading>

          <Flex flexDirection="column" gap={1} alignItems="center" marginTop={4}>
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold" color="secondary">¿Eres una empresa?</Heading>
            <Heading as="h4" fontFamily="Poppins" fontSize="lg" fontWeight="bold" onClick={onOpen} color="secondary" textDecoration="underline" cursor="pointer">Haz click aquí</Heading>
            {/* <Button _hover={{ bg: 'secondaryDark' }} bg="secondary" >Soy una Empresa</Button> */}
          </Flex>

          <Heading as="h2" fontFamily="Raleway" fontSize="2xl" fontWeight="extraBold" marginTop={8} textAlign="center">
            Completa este formulario para inscribirte como
            {' '}
            <Link textDecoration="underline" fontWeight="bold" textColor="primary" href={ROUTES.infoPracticantes}>
              Practicante
            </Link>
          </Heading>

        </Flex>

        <Form schema={RegisterStudentSchema} onSubmit={(data) => handleSubmit(data)}>
          <InputField label="Email *" name="email" />

          <Flex gap={6} w="100%" display={{ base: 'block', md: 'flex' }}>
            <InputField label="Password *" name="password" marginBottom={{ base: '24px', md: '0px' }} />
            <InputField label="CI *" name="ci" helper="Ingrese su ci sin ni guión ni puntos" type="number" />
          </Flex>

          <Flex gap={6} w="100%" display={{ base: 'block', md: 'flex' }}>
            <InputField label="Primer Nombre *" name="first_name" marginBottom={{ base: '24px', md: '0px' }} />
            <InputField label="Segundo Nombre" name="second_name" />
          </Flex>

          <Flex gap={6} w="100%" display={{ base: 'block', md: 'flex' }}>
            <InputField label="Primer Apellido *" name="last_name" marginBottom={{ base: '24px', md: '0px' }} />
            <InputField label="Segundo Apellido" name="second_surname" />
          </Flex>

          <Flex gap={6} w="100%" display={{ base: 'block', md: 'flex' }}>
            <InputField label="Fecha de nacimiento *" name="birth_date" type="date" marginBottom={{ base: '24px', md: '0px' }} />
            <InputField label="Telefono" name="phone_number" type="number" />
          </Flex>

          {/* EMIII */}

          {
          // - Highschool (input type: text)
          // - Boletin (input type: upload file)
        }

          <Button bgColor="primary" variant="solid" isLoading={loader} w="160px" type="submit">¡Registrarme!</Button>
        </Form>
      </VStack>

      <PrimaryButton onClick={() => [navigate(ROUTES.login)]} bg="transparent" fontColor="primary" hover="bg-none" marginTop={4}>
        ¿Ya tienes cuenta?
      </PrimaryButton>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent w={{ base: '90%', md: '100%' }}>
          <ModalHeader bg="bgColor">¿Eres una empresa?</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="bgColor">
            <Text marginBottom={3}>
              Agradecemos tu interés en participar en nuestro programa de prácticas.
            </Text>
            <Text>
              Contactate con nosotros para inscribirte como empresa
              {' '}
              <Link textDecoration="underline" fontWeight="bold" textColor="primary" href="mailto:somosefect@gmail.com">
                somosefect@gmail.com
              </Link>
            </Text>
          </ModalBody>
          <ModalFooter bg="bgColor">
            <Link href="mailto:somosefect@gmail.com" id="mailLink">
              <Button _hover={{ bg: 'primaryDark' }} bg="primary">Contactar a EFECT</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
