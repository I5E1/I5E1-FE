import axios from 'axios'
import { Login } from '@/types/api'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async ({ email, password }: Login) => {
  try {
    const res = await api.post('/login', { email, password });
    return res;
  } catch (error) {
    throw error;
  }
};

export { login };