import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_HOST}${process.env.NEXT_PUBLIC_GOOGLE_LOGIN_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
