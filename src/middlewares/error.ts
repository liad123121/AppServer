import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.sendErrors());
  }

  return res.status(400).send([{ message: err.message }]);
};
