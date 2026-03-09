const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
import playerRoutes from './routes/playerRoutes'
import leagueRoutes from './routes/leagueRoutes';
import teamRoutes from './routes/teamRoutes';

require('dotenv').config();

const allowedOrigins = [
    "https://catch23-api.vercel.app/",
    "https://catch23.vercel.app/"
]

const app = express();
app.use(express.json());
app.use(cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
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

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
