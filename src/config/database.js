import { Sequelize } from 'sequelize';

<<<<<<< HEAD
// Variables de entorno (asegúrate de definirlas en tu .env)
const USUARIO = process.env.USUARIO || '';
const CONTRASENA = process.env.CONTRASENA || '';
const DB = process.env.DB || '';

export const database = new Sequelize(DB, USUARIO, CONTRASENA, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

=======
if (
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASS ||
  !process.env.DB_HOST
) {
  console.error("Error: Variables de entorno necesarias faltantes.");
  process.exit(1);
}

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mysql",
  host: DB_HOST,
  logging: false,
});
>>>>>>> origin/main
