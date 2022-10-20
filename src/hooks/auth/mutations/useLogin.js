import { useToast } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import AuthController from '../../../networking/controllers/AuthController';
import useAuth from '../useAuth';

export default function useLogin() {
  const navigate = useNavigate();
  const { setState } = useAuth();
  const toast = useToast();

  const { mutateAsync } = useMutation(AuthController.login, {
    onSuccess: ({ token }) => {
      localStorage.setItem('accessToken', token);
      setState({ token });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    },
    onError: ({ response }) => {
      if (response?.data) {
        toast({
          title: `${response.data?.message}`,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    },
  });

  return { mutateAsync };
}
