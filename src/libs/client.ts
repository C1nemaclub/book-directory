import axios from 'axios';
import { API_URL } from '../constants';

export const client = axios.create({
  baseURL: API_URL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

client.interceptors.response.use((res) => {
  console.log(res);
  
  return res;
});
