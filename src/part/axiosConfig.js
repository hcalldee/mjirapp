// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8025/api/', // Set the base URL
});

export default api;
