// USED AI TO HELP WITH THIS
import pg from 'pg'
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    dialectModule: pg
});

export default sequelize;
