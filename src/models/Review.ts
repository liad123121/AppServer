import mongoose from "mongoose";

interface ReviewAttr {
  title: string;
  content: string;
}

interface ReviewDoc extends mongoose.Document {
  title: string;
  content: string;
}

interface ReviewModel extends mongoose.Model<ReviewDoc> {
  build(attr: ReviewAttr): ReviewDoc;
}

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

reviewSchema.statics.build = (attrs: ReviewAttr) => {
  return new Review(attrs);
};

const Review = mongoose.model<ReviewDoc, ReviewModel>("Review", reviewSchema);

export { Review };
