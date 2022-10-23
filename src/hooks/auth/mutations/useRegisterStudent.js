import { useToast } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import AuthController from '../../../networking/controllers/AuthController';

export default function useRegisterStudent() {
  const navigate = useNavigate();
  const toast = useToast();

  const { mutateAsync } = useMutation(AuthController.registerStudent, {
    onSuccess: () => {
      toast({
        title: 'Te has registrado con exito.',
        description: 'Ahora puedes iniciar sesión.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    },
  });

  return { mutateAsync };
}
