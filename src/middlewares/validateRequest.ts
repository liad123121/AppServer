import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { validationResultError } from "../errors/validationResultError";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new validationResultError(errors.array());
  }

  next();
};
