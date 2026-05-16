const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import playerRoutes from './routes/playerRoutes'
import leagueRoutes from './routes/leagueRoutes';
import teamRoutes from './routes/teamRoutes';
import draftPickRoutes from './routes/draftPickRoutes';
import authRoutes from './routes/authRoutes'
import minorRoutes from './routes/minorRoutes';
import Team from './models/team';
import Player from './models/player';
import DraftPick from './models/draftPick';
import League from './models/league';
import PasswordResetToken from './models/passwordResetToken';

//const ApiUser = require('./models/apiUser')

// associations
Team.belongsTo(League, { foreignKey: 'league_id', as: 'league' });
Team.hasMany(DraftPick, { foreignKey: 'team_id', as: 'players' });
DraftPick.belongsTo(Team, { foreignKey: 'team_id', as: 'team' });
Player.hasMany(DraftPick, { foreignKey: 'player_id', as: 'draftPicks' });
DraftPick.belongsTo(Player, { foreignKey: 'player_id', as: 'player' });

require('dotenv').config();

const allowedOrigins = [
  "https://catch23.vercel.app",
  "https://catch23-api.vercel.app",
  "https://catch23-public.vercel.app",
  "http://localhost:3000",  
];


const app = express();
app.use(express.json());
app.use(cors({
    origin:( origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS origin not allowed"));
        }
    },
    credentials: true
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/leagues', leagueRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/draft-picks', draftPickRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/minorleague', minorRoutes);

const PORT = process.env.PORT || 8000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


