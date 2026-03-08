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
 axios.post('/api/leagues', {
   title: leagueData.name,
   leagueIconUrl: leagueData.logoUrl, // change this to IMAGE
   season: leagueData.season,
   status: 'PRE-DRAFT',
 });

 // Teams

 export const createTeam = (name, leagueId) => 
  axios.post('/api/teams', {
    name,
    leagueId
  });


 
