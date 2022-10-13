import React, { useState, useEffect } from 'react';
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (email) {
      setEmailError('');
    }
    if (password) {
      setPasswordError('');
    }
  }, [email, password]);

  const handleLogin = () => {
    if (!email) {
      setEmailError('Correo requerido');
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Correo inválido');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Contraseña requerida');
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
      setLoader(true);
      // llamar a la api
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  });

  return (
    <>
      <Heading>
        <Center>
          <h1>Inicio de sesión</h1>
        </Center>
      </Heading>

      <VStack mt="30px">
        <Center flexDirection="column">
          <FormControl id="email" mx="auto">
            <FormLabel color="gray" w="70vw">
              Correo
            </FormLabel>
            <Input
              variant="flushed"
              focusBorderColor="secondary"
              type="email"
              fontWeight="normal"
              w="80vw"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText color="secondaryDark" w="70vw">
              {emailError}
            </FormHelperText>
          </FormControl>
          <FormControl id="password" my="30px">
            <FormLabel color="gray" w="70vw">
              Contraseña
            </FormLabel>
            <Input
              variant="flushed"
              focusBorderColor="secondary"
              type="password"
              w="80vw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText color="secondaryDark" w="70vw">
              {passwordError}
            </FormHelperText>
          </FormControl>
        </Center>
        {/* {loader ? ( */}
        <Button
          isLoading={loader}
          loadingText="Enviando"
          // variant="outline"
          spinnerPlacement="start"
          bg="primary"
          type="submit"
          onClick={() => handleLogin()}
        />
        {/* ) : (
          <Button
            bg="primary"
            type="submit"
            onClick={() => handleLogin()}
          >
            Enviar
          </Button> */}
        {/* )} */}
      </VStack>
    </>
  );
}

export default Login;
