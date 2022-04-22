import { API_KEY } from '@env';
import axios from 'axios';
import i18next from 'i18next';

const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    country: i18next.t('COUNTRY'),
  },
});

export default api;
