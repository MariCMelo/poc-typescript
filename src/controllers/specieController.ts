import { Request, Response } from "express";
import httpStatus from "http-status";
import { CreateSpecie } from "protocols";
import { specieServices } from "services/specieService";

async function getSpecies(req: Request, res: Response) {
  try {
    const specie = await specieServices.getSpecies();
    res.send(specie);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }
}

async function addSpecie(req: Request, res: Response) {
  const specie = req.body as CreateSpecie;
  await specieServices.createSpecie(specie);
  res.sendStatus(httpStatus.CREATED);
}

export const specieController = { addSpecie, getSpecies };
