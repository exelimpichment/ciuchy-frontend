import axios from 'axios';

const developmentBaseUrl = 'http://localhost:5001/api/v1/';
// const productionBaseUrl = 'https://apitest.ciuchy.store/api/v1/auth';

export const axiosInstance = axios.create({
  baseURL: developmentBaseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  withCredentials: true,
});

export const formDataAxiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api/v1/item',
  timeout: 10000,
  // headers: { 'Content-Type': 'multipart/form-data' },
  withCredentials: true,
});
