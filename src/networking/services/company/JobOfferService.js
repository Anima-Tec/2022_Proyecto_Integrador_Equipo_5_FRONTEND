import axios from 'axios';
import API_URL from '../../api-routes';

export default class JobOfferService {
  static async createJobOffer(jobOfferData) {
    const response = await axios.post(
      `${API_URL.URL_BASE}/joboffer`,
      jobOfferData,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return response.data;
  }

  static async getJobOffers() {
    const response = await axios.get(`${API_URL.URL_BASE}/joboffer`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  }

  static async getJobOffer(id) {
    const response = await axios.get(
      `${API_URL.URL_BASE}/joboffer/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return response.data.jobOffer;
  }
}
