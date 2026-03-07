const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes'

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // relink to actual server later
}));

// Routes
app.use('/api/users', userRoutes);

