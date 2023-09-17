import joi from "joi";

export const specieSchema = joi.object({
  specie: joi.string().required(),
  phylum: joi.string().required(),
  kingdom: joi.string().required(),
});
