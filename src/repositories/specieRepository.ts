import prisma from "database/databaseConnection";
import { CreateSpecie } from "protocols";

async function getSpecies() {
  const result = await prisma.species.findMany();
  return result;
  // const result = await db.query<Specie>(`SELECT * FROM species`);
  // return result.rows || [];
}

async function addSpecie(species: CreateSpecie) {
  const result = await prisma.species.create({
    data: species,
  });
  return result;

  // const { specie, phylum, kingdom } = species;

  // await db.query<Specie>(
  //   `INSERT INTO species (specie, phylum, kingdom) VALUES ($1,$2, $3)`,
  //   [specie, phylum, kingdom]
  // );
}

export const speciesRepository = { getSpecies, addSpecie };
