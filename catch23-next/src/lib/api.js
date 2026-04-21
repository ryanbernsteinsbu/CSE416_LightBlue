import axios from 'axios'

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://catch23-api.vercel.app';
const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || 'https://catch23-api.vercel.app').replace('http://', 'https://');
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

const PUBLIC_URL = process.env.NEXT_PUBLIC_PUBLIC_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const secret = process.env.NEXT_PUBLIC_API_KEY;

const sign = (body) => {
    const payload = JSON.stringify(body);

    const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(payload)
        .digest("hex");

    return expectedSignature;
}

const publicApi = axios.create({
    baseURL: PUBLIC_URL,
    headers: {
        "x-email": EMAIL,
    }
});
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
    user_id: typeof window !== "undefined" ? localStorage.getItem("user_id") : null,

    draftSettings: leagueData.draftSettings,
    rosterSettings: leagueData.rosterSettings,
    playerSettings: leagueData.playerSettings,
    scoringSettings: leagueData.scoringSettings,
  });

export const deleteLeague = (id) =>
    axios.delete(`/api/leagues/${id}`);

export const getUserLeagues = (userId) =>
    axios.get(`/api/leagues/user/${userId}`);

// Teams

export const createTeam = (name, leagueId) => 
  axios.post('/api/teams/create', {
    name,
    league_id: leagueId,
    budget: 260 // default
  });

export const getLeagueTeams = (leagueId) =>
  axios.get(`/api/teams/league/${leagueId}`);

export const getTeam = (id) =>                
  axios.get(`/api/teams/${id}`);

export const updateTeam = (id, data) =>            
  axios.put(`/api/teams/${id}`, data);

export const deleteTeam = (id) =>                
  axios.delete(`/api/teams/${id}`);


// Players

export const getAllPlayers = () => 
  axios.get('/api/players/all');

export const getPlayer = (id) => 
  axios.get(`/api/players/${id}`);

export const getPlayerByMlbId = (mlbPlayerId) => 
  axios.get(`/api/players/mlbId/${mlbPlayerId}`);

export const getPlayersByPosition = (position) => 
  axios.get(`/api/players/position/${position}`);

export const createPlayer = (data) => 
  axios.post('/api/players/create', data);

export const updatePlayer = (id, data) => 
  axios.put(`/api/players/${id}`, data);

export const deletePlayer = (id) => 
  axios.delete(`/api/players/${id}`);


// Draft Pick

// export const createDraftPick = (data) =>
//   axios.post('/api/draft-picks/create', data);

// save multiple picks at once
export const saveDraftPicks = (payload) => 
    axios.post('/api/draft-picks/bulk', payload);

export const getTeamDraftPicks = (teamId) =>
  axios.get(`/api/draft-picks/team/${teamId}`);


// Getting Ranked Players
export const getRankedPlayers = async () => {
    const data = {};
    publicApi.post(`/api/ranking/rank`, {
        data,
        headers: {"x-signature": sign(data)}
    })
};
 
