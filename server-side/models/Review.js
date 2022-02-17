const { model, Schema } = require("mongoose");

const strTypeRequiredField = {
  type: String,
  required: true,
};

const schema = new Schema({
  img: String,
  name: strTypeRequiredField,
  description: strTypeRequiredField,
  ratings: {
    type: Number,
    required: true,
  },
  product: {
    type: Schema.Types.String,
    ref: "Product",
  },
  uid: strTypeRequiredField,
});

const Review = new model("Review", schema);

module.exports = Review;
