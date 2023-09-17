import { specieController } from "controllers/specieController";
import { Router } from "express";

const specieRouter = Router();

specieRouter.get("/specie", specieController.getSpecies);
specieRouter.post("/specie", specieController.addSpecie);

export default specieRouter;
