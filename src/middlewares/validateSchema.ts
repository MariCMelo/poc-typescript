import { Request, Response, NextFunction } from "express";
import { errors } from "../errors/errors"
import Joi from "joi";

export function validateSchema(schema: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const validation = schema.validate(req.body);
  
      if (validation.error) {
        console.log(validation.error.details);
        throw errors.wrongData();
      }
  
      next();
    };
  }