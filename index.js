import express from 'express';
import cors from 'cors';

// Cargar las variables de entorno
import dotenv from 'dotenv';
dotenv.config();



// Importar las rutas
import authRouter from "./routes/auth/authRoutes.js";
import articulosRouter from './routes/articulos/articulosRoutes.js';

// Crear la app de express
const app = express();

// Habilitar la captura de datos mediante post / formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar CORS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Length,X-Knowledge',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Configurar el puerto
const port = 3000;

// Usar las rutas
app.use('/auth', authRouter); // AUTH
app.use('/articulos', articulosRouter); // articulos

// Levantar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
