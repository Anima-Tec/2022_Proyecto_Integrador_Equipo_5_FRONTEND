import { useToast } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import JobOfferController from '../../../networking/controllers/company/JobOfferController';

export default function useCreateJobOffer() {
  const toast = useToast();

  const { mutateAsync } = useMutation(JobOfferController.createJobOffer, {
    onSuccess: () => {
      toast({
        title: 'Oferta de trabajo creada con exito.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
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
