import express from 'express';
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import obraRoutes from "./routes/obra.routes.js";

const app = express();
app.use(cors({
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/', authRoutes);
app.use('/api/', obraRoutes);

export default app;