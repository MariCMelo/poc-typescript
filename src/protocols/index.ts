import { Species } from "@prisma/client";

export type CreateSpecie = Omit<Species, "id">;
