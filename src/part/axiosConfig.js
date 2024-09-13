import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_ENDHOST}:8025/api/`, // Use the updated environment variable
});

export default api;