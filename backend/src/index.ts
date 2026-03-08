const express = require('express');
const cors = require('cors');
import sequelize from './config/database';
import userRoutes from './routes/userRoutes'

require('dotenv').config();
const allowedOrigins = [
  "https://catch23.vercel.app",
  "https://catch23-api.vercel.app"
];

function verifyOrigin (ctx) {
    const origin = ctx.headers.origin;
    if (!originIsValid(origin)) return false;
    return origin;
}

function originIsValid (origin) {
    return allowedOrigins.indexOf(origin) != -1;
}

const app = express();
app.use(express.json());
app.use(cors({
    origin: verifyOrigin,
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

