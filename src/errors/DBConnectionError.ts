import { CustomError } from "./customError";

export class DBConnectionError extends CustomError {
  statusCode = 500;

  constructor() {
    super();
    Object.setPrototypeOf(this, DBConnectionError.prototype);
  }

  sendErrors() {
    return [{ message: "Error while connecting to DB!" }];
  }
}
