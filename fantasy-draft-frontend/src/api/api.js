import axios from 'axios'

const BASE_URL = 'http://localhost:8000';
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

// Authentication

export const registerUser = (email, displayName, password) => 
    axios.post('/api/users/register', { 
      email, 
      displayName, 
      password 
    });

export const loginUser = (email, password) => 
    axios.post('/api/users/login', { 
      email, 
      password 
  });

// League
export const createLeague = (leagueData) =>
    axios.post('/api/leagues/create', {
        title: leagueData.name,
        season: leagueData.season,
        status: 'PRE_DRAFT',
        leagueIconUrl: 'https://i.imgur.com/DxHxkuJ.png',
        user_id: localStorage.getItem('user_id'),
    });

export const deleteLeague = (id) =>
    axios.delete(`/api/leagues/${id}`);

export const getUserLeagues = (userId) =>
    axios.get(`/api/leagues/user/${userId}`);

// Teams

export const createTeam = (name, leagueId) => 
  axios.post('/api/teams', {
    name,
    leagueId
  });




 
