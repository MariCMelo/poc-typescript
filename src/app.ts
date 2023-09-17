import express, { Express } from "express";
import dotenv from "dotenv";
import specieRouter from "routes/specieRoutes";
import { errorHandler } from "middlewares/errorHandler";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(specieRouter);
app.use(errorHandler);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
