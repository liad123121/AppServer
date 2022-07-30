import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { Review } from "../../models/Review";

const router = express.Router();

router.delete("/api/review/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const review = await Review.findByIdAndDelete(id);

  if (!review) {
    throw new NotFoundError();
  }

  res.send(review);
});

router.delete("/api/review", async (req: Request, res: Response) => {
  const review = await Review.deleteMany({});

  if (!review) {
    throw new NotFoundError();
  }

  res.send(review);
});

export { router as deleteReviewRouter };
