import express from 'express';
import routerLibros from './routes/libros.routes.js';
import { config } from 'dotenv';
config();
const app = express();
app.use(express.json());
app.set('port', process.env.PORT_SERVER);

app.use('/libros', routerLibros);

export default app; 