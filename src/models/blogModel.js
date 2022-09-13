const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Blog Title is required",
      trim: true,
    },
    body: {
      type: String,
      required: "Blog Body is required",
      trim: true,
    },
    authorId: {
      type: ObjectId,
      ref: "AuthorModel",
      required: " Blog Author is required",
      trim: true,
    },
    tags: [{ type: String, trim: true }],
    category: {
      type: String,
      required: "Blog Category is required",
      trim: true,
    },
    subcategory: [{ type: String, trim: true }],

    published: { type: Boolean, default: false },
    publishedAt: { type: Date, default: null },

    Deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
