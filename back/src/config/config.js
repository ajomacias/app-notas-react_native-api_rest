 import { config as dotenv } from 'dotenv';
 dotenv();
 
const db ={
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
}
export default db;