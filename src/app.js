import express from 'express';
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import obraRoutes from "./routes/obra.routes.js";
import reporteRoutes from "./routes/reporte.routes.js";
import ensayeRoutes from "./routes/ensaye.routes.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

console.log(process.env.BASE_URL);
console.log(process.env.BASE_URL_FRONTEND);
app.use(cors({
    origin: ['http://localhost:5173',
        'http://localhost:4000/api',
        process.env.BASE_URL,
        process.env.BASE_URL_FRONTEND],
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/', authRoutes);
app.use('/api/', obraRoutes);
app.use('/api/', reporteRoutes);
app.use('/api/', ensayeRoutes);

export default app;