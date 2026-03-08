import axios from 'axios'

const BASE_URL = 'http://localhost:8000';
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

export const registerUser = (email, displayName, password) => 
    axios.post('/api/users/register', { email, displayName, password });

export const loginUser = (email, password) => 
    axios.post('/api/users/login', { email, password });
