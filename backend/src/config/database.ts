import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({
    path: process.env.NODE_ENV === 'test'? '.env.test' : '.env'
});
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("DB URL:", process.env.DATABASE_URL);
console.log("Dialect options:", {
  ssl: process.env.NODE_ENV === 'test' ? false : { rejectUnauthorized: false }
});
const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
       ssl: process.env.NODE_ENV === 'test'?  false :{ rejectUnauthorized: false }
    }
});

export default sequelize;
