import express from 'express';
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import obraRoutes from "./routes/obra.routes.js";
import reporteRoutes from "./routes/reporte.routes.js";
import ensayeRoutes from "./routes/ensaye.routes.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/', authRoutes);
app.use('/api/', obraRoutes);
app.use('/api/', reporteRoutes);
app.use('/api/', ensayeRoutes);

export default app;