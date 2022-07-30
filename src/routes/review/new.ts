import express, { Request, Response } from "express";
import { Review } from "../../models/Review";
import { body, validationResult, ValidationError } from "express-validator";
import { validateRequest } from "../../middlewares/validateRequest";
import { NotFoundError } from "../../errors/NotFoundError";

const router = express.Router();

router.post(
  "/api/review",
  [
    body("title").trim().not().isEmpty().withMessage("Must type a title!"),
    body("title")
      .isLength({ max: 255 })
      .withMessage("Title can't go over 255 characters!"),
    body("content").trim().not().isEmpty().withMessage("Must type a content!"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const review = Review.build({
      title,
      content,
    });

    await review.save();

    res.status(201).send(review);
  }
);

router.post("/api/review/file", async (req: Request, res: Response) => {
  const file = req.body.file;

  if (!file) {
    throw new NotFoundError();
  }

  const reviews = await Review.insertMany(file);

  res.status(201).send(reviews);
});

export { router as newReviewRouter };
