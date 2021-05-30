const mongoose = require("mongoose");

const productschema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
});

module.exports = mongoose.model("Product", productschema);
