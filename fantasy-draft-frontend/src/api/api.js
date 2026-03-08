import axios from 'axios'

const BASE_URL = 'https://catch23-api.vercel.app/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export const registerUser = (email, displayName, password) => 
    axios.post('/api/users/register', { email, displayName, password });

export const loginUser = (email, password) => 
    axios.post('/api/users/login', { email, password });
