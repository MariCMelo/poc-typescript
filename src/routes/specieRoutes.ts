import { specieController } from "controllers/specieController";
import { Router } from "express";
import { validateSchema } from "middlewares/validateSchema";
import { specieSchema } from "schemas/specieSchema";

const specieRouter = Router();

specieRouter.get("/specie", specieController.getSpecies);
specieRouter.post("/specie", validateSchema(specieSchema), specieController.addSpecie);

export default specieRouter;
