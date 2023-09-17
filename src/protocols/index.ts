export type Specie = {
  id: number;
  specie: string;
  phylum: string;
  kingdom: string;
};

export type CreateSpecie = Omit<Specie, "id">;
