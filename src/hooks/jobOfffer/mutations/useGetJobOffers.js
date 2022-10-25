import { useMutation } from 'react-query';
import JobOfferController from '../../../networking/controllers/company/JobOfferController';

export default function useGetJobOffers() {
  const { mutateAsync } = useMutation(JobOfferController.getJobOffers, {
    onSuccess: (data) => data,
    onError: () => {},
  });

  return { mutateAsync };
}
