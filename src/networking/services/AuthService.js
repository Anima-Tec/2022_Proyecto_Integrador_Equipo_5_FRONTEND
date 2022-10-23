/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class AuthService {
  static async login(userData) {
    const response = await axios.post('http://localhost:4000/api/v1/login', userData);
    return response.data;
  }

  static registerStudent(studentData) {
    const response = axios.post('http://localhost:4000/api/v1/register', studentData);
    return response;
  }

  static logout() {
  }

  static async getCurrentUser(accessToken) {
    const response = await axios.get('http://localhost:4000/api/v1/me', {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.user;
  }
}
