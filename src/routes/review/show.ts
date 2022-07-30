import express, { Request, Response } from "express";
import { Review } from "../../models/Review";

const router = express.Router();

router.get("/api/review", async (req: Request, res: Response) => {
  const reviews = await Review.find({});
  res.send(reviews);
});

export { router as showReviewRouter };
