/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading, VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoginSchema from '../../../lib/schemas/auth/login.schema';
import Form from '../../../components/Form';
import useLogin from '../../../hooks/auth/mutations/useLogin';
import InputField from '../../../components/Fields/InputField';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import ROUTES from '../../../routers/config/routes';

export default function Login() {
  const { mutateAsync } = useLogin();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      setLoader(true);
      await mutateAsync(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack spacing={8} height="100%" width="100%" justifyContent="center" marginY={28}>
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        textAlign="center"
        marginBottom={4}
      >
        Inicio de sesión
      </Heading>

      <Box w={{ sm: '300px', md: '320px' }}>
        <Form schema={LoginSchema} onSubmit={(data) => handleSubmit(data)}>
          <InputField label="Correo electrónico" name="email" />
          <InputField label="Contraseña" name="password" />
          <Button bgColor="primary" variant="solid" isLoading={loader} type="submit" w="120px">Enviar</Button>
        </Form>
        <PrimaryButton onClick={() => [navigate(ROUTES.register)]} bg="transparent" fontColor="primary" hover="bg-none" marginTop={4}>
          ¿No tienes cuenta?
        </PrimaryButton>
      </Box>

      {/* add redirect to register Student */}
    </VStack>
  );
}
