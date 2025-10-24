import express from "express";
import morgan from 'morgan';
import { database } from './config/database.js'; // asegúrate de exportar database con export

import 'dotenv/config';
const app = express();


const port = process.env.PORT || 3000;


// Función asíncrona principal
(async () => {
  try {
    await database.authenticate();
    console.log('Conexión exitosa a la base de datos');
    
    } catch (err) {
    console.error('Error al conectar o sincronizar:', err);
  }
})();

// Configuración
const PORT = process.env.PORT || 3001;
app.set('port', PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Levantar servidor
app.listen(app.get('port'), () => {
  console.log('Servidor Funcionando en puerto ' + app.get('port'));
});

