import axios from 'axios';
import API_URL from '../../api-routes';

export default class ApplyService {
  static async applyToJobOffer(apply) {
    const response = await axios.post('/apply', apply);
    return response;
  }

  static async getStudentsToApply(id) {
    const response = await axios.get(`${API_URL.URL_BASE}/apply/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data.apply;
  }

  static async getJobOffersToApply() {
    const response = await axios.get(`${API_URL.URL_BASE}/apply`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data.apply;
  }
}
