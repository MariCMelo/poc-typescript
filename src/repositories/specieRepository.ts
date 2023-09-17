import { db } from "database/databaseConnection";
import { Specie, CreateSpecie } from "protocols";

async function getSpecies() {
  const result = await db.query<Specie>(`SELECT * FROM species`);
  return result.rows || [];
}

async function addSpecie(species: CreateSpecie) {
  const { specie, phylum, kingdom } = species;

  await db.query<Specie>(
    `INSERT INTO species (specie, phylum, kingdom) VALUES ($1,$2, $3)`,
    [specie, phylum, kingdom]
  );
}

export const speciesRepository = { getSpecies, addSpecie };
