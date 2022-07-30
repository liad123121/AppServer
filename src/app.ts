import express from "express";
import cors from "cors";
import "express-async-errors";
import "dotenv/config";

import { ErrorHandler } from "./middlewares/error";
import mongoose from "mongoose";
import { DBConnectionError } from "./errors/DBConnectionError";
import { newReviewRouter } from "./routes/review/new";
import { NotFoundError } from "./errors/NotFoundError";
import { deleteReviewRouter } from "./routes/review/delete";
import { showReviewRouter } from "./routes/review/show";
import { showOneReviewRouter } from "./routes/review/showOne";

const app = express();

app.use(express.json());
app.use(cors());

app.use(newReviewRouter);
app.use(deleteReviewRouter);
app.use(showReviewRouter);
app.use(showOneReviewRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

const start = async () => {
  console.log(process.env.PORT);

  /*try {
    if (!process.env.MONGO_URI) {
      throw new DBConnectionError();
    }

    await mongoose.connect("mongodb://localhost:27017/TestDB");
  } catch (err) {
    throw new DBConnectionError();
  }*/

  app.listen(process.env.PORT || 4000, () => {
    console.log("App is running on port 4000!");
  });
};

start();
