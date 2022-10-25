import axios from 'axios';
import API_URL from '../../api-routes';

export default class InterestService {
  static async getInterestCompany() {
    const response = await axios.get(`${API_URL.URL_BASE}/interest/company`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data.companyInterest;
  }

  static async getJobOfferInterest() {
    const response = await axios.get(`${API_URL.URL_BASE}/interest/jobOffer`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data.jobOfferInterest;
  }
}
