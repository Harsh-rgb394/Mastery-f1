const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  name: { type: String },

  creator: { type: String, required: true },
  tags: { type: [String], default: [] },
  selectedFile: { type: String },
  likecount: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postmodel = mongoose.model("postmodel", postSchema);

module.exports = postmodel;
