const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes'

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://catch23.vercel.app/', // relink to actual server later
    credentials: true
}));

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

