const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    rank: {
      type: Number,
    },
    slug: {
      type: String,
    },
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
