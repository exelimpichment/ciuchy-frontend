import axios from 'axios';

const developmentBaseUrl = 'http://localhost:5001/api/v1/auth';
// const productionBaseUrl = 'https://apitest.ciuchy.store/api/v1/auth';

export const axiosInstance = axios.create({
  baseURL: developmentBaseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  withCredentials: true,
});
