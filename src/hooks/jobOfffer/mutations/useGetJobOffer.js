import { useMutation } from 'react-query';
import JobOfferController from '../../../networking/controllers/company/JobOfferController';

export default function useGetJobOffer() {
  const { mutateAsync } = useMutation(JobOfferController.getJobOffer, {
    onSuccess: (data) => data,
    onError: () => {},
  });

  return { mutateAsync };
}
