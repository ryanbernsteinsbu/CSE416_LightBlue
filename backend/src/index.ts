const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import playerRoutes from './routes/playerRoutes'
import leagueRoutes from './routes/leagueRoutes';
import teamRoutes from './routes/teamRoutes';

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // relink to actual server later
    credentials: true
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/leagues', leagueRoutes);
app.use('/api/teams', teamRoutes);

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});