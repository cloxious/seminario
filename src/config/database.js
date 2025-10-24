import { Sequelize } from 'sequelize';

// Variables de entorno (asegúrate de definirlas en tu .env)
const USUARIO = process.env.USUARIO || '';
const CONTRASENA = process.env.CONTRASENA || '';
const DB = process.env.DB || '';

export const database = new Sequelize(DB, USUARIO, CONTRASENA, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

