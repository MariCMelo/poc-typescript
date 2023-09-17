import { errors } from "errors/errors";
import { CreateSpecie, Specie } from "protocols";
import { speciesRepository } from "repositories/specieRepository";

async function getSpecies() {
  try {
    const specie = await speciesRepository.getSpecies();
    return specie;
  } catch (error) {
    // Trate o erro de alguma forma, como logando ou relançando.
    throw errors.notFound("Species");
  }
}

async function createSpecie(specieData: CreateSpecie) {
  const newSpecie = await speciesRepository.addSpecie(specieData);
  return newSpecie;
}

export const specieServices = { getSpecies, createSpecie };
