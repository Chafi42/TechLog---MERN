// client/src/services/userService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = () => axios.post(`${API_URL}/register`);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
