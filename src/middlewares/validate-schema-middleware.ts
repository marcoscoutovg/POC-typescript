import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import httpStatus from 'http-status';

export default function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    
    if (validation.error) {
      const errors: string[] = validation.error.details.map((detail) => detail.message);

      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }
    next();
  };
}