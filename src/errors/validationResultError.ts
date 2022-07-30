import { CustomError } from "./customError";
import { ValidationError } from "express-validator";

export class validationResultError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, validationResultError.prototype);
  }

  sendErrors() {
    return this.errors.map((err) => {
      return { message: err.msg };
    });
  }
}
