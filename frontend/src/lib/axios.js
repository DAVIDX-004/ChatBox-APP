import axios from 'axios'; export const axiosInstance = axios.create({ baseURL: 'https://chatbox-app-dl05.onrender.com/api', withCredentials: true });
