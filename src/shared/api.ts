import axios from 'axios';

const baseURL: string = `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/v1`;

export const api = axios.create({

  baseURL,
  timeout:5000

});