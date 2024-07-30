import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.BE_HOST}${process.env.GOOGLE_LOGIN_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
