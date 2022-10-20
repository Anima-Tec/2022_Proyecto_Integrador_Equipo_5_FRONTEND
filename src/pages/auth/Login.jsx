/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Button,
  Heading, VStack,
} from '@chakra-ui/react';
import LoginSchema from '../../lib/schemas/auth/login.schema';
import Form from '../../components/Form';
import useLogin from '../../hooks/auth/mutations/useLogin';
import InputField from '../../components/InputField/InputField';

export default function Login() {
  const { mutateAsync } = useLogin();

  const handleSubmit = async (data) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VStack spacing={8} height="100%" width="100%">
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        textAlign="center"
      >
        Login
      </Heading>

      <Form schema={LoginSchema} onSubmit={(data) => handleSubmit(data)}>
        <InputField label="Email" name="email" />
        <InputField label="Password" name="password" />
        <Button type="submit">Sign in</Button>
      </Form>

      {/* add redirect to register Student */}
    </VStack>
  );
}
