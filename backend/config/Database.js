import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize('badminton_booking_system', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;