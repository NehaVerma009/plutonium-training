const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    fname: { type: String, required: "Fname is required", trim: true },

    lname: { type: String, required: "Lname is required", trim: true },

    title: {
      type: String,
      enum: ["Mr", "Mrs", "Miss"],
      required: "Title is required",
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      uppercase: true,
      unique: true,
      required: "Email address is required",
      validate: {
        validator: function (email) {
          return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        },
        msg: "Please fill a valid email address",
      },
    },
    password: { type: String, trim: true, required: "Password is required" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AuthorModel", authorSchema);
