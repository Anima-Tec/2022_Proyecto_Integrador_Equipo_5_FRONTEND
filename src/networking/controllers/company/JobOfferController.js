import JobOfferService from '../../services/company/JobOfferService';

class JobOfferController {
  static async createJobOffer(jobOffer) {
    const response = await JobOfferService.createJobOffer(jobOffer);
    return response;
  }

  static async getJobOffers() {
    const response = await JobOfferService.getJobOffers();
    return response;
  }

  static async getJobOffer(id) {
    const { jobOffer } = await JobOfferService.getJobOffer(id);
    return jobOffer;
  }
}

export default JobOfferController;
