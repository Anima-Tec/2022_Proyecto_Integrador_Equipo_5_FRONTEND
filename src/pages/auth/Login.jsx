/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading, VStack,
} from '@chakra-ui/react';
import LoginSchema from '../../lib/schemas/auth/login.schema';
import Form from '../../components/Form';
import useLogin from '../../hooks/auth/mutations/useLogin';
import InputField from '../../components/Fields/InputField';

export default function Login() {
  const { mutateAsync } = useLogin();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (data) => {
    try {
      await mutateAsync(data);
      setLoader(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack spacing={10} height="100%" width="100%" justifyContent="center">
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        textAlign="center"
      >
        Inicio de sesión
      </Heading>

      <Box w={{ sm: '100%', md: '50%', lg: '35%' }}>
        <Form schema={LoginSchema} onSubmit={(data) => handleSubmit(data)}>
          <InputField label="Correo electrónico" name="email" />
          <InputField label="Contraseña" name="password" />
          <Button bgColor="primary" variant="solid" isLoading={loader} type="submit">Enviar</Button>
        </Form>
      </Box>

      {/* add redirect to register Student */}
    </VStack>
  );
}
