import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  sendErrors() {
    return [{ message: "This thing or place doesn't exist!" }];
  }
}
