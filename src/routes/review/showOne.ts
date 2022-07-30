import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/NotFoundError";
import { Review } from "../../models/Review";

const router = express.Router();

router.get("/api/review/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const review = await Review.findById(id);

  if (!review) {
    throw new NotFoundError();
  }

  res.send(review);
});

export { router as showOneReviewRouter };
