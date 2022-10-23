import React from 'react';
import { Button, Heading, VStack } from '@chakra-ui/react';
import Form from '../../../components/Form';
import RegisterStudentSchema from '../../../lib/schemas/auth/registerStudent.schema';
import useRegisterStudent from '../../../hooks/auth/mutations/useRegisterStudent';
import InputField from '../../../components/Fields/InputField';

function Register() {
  const { mutateAsync } = useRegisterStudent();

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
        Registro
      </Heading>

      <Form schema={RegisterStudentSchema} onSubmit={(data) => handleSubmit(data)}>
        <InputField label="Email" name="email" />
        <InputField label="Password" name="password" />
        <InputField label="CI" name="ci" helper="Ingrese su ci sin puntos, ni guion" />
        <InputField label="Primer Nombre" name="first_name" />
        <InputField label="Segundo Nombre" name="second_name" />
        <InputField label="Primer Apellido" name="last_name" />
        <InputField label="Segundo Apellido" name="second_surname" />
        <InputField label="Año de nacimiento" name="birth_date" type="date" />
        <InputField label="Telefono" name="phone_number" />
        <Button type="submit">Sign in</Button>
      </Form>

      {/* add redirect to register Student */}
    </VStack>
  );
}

export default Register;
