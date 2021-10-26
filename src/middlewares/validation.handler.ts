import boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validatorHandler(schema: ObjectSchema, property: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property]
    const {error} = schema.validate(data)
    if(error) {
      next(boom.badRequest(error.message))
    }
    next(error)
  }
}