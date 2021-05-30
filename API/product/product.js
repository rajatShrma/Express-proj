const express = require("express");
const mongoose = require("mongoose");
const Product = require("./../Models/product");

var router = express.Router();

// router.get("/", (req, res, next) => {
//   res.status(200).json({
//     message: "Product get API works",
//   });
// });

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => res.status(500).json(error));
});

router.get("/:productId", (req, res, next) => {
  var id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((response) => {
      res.status(200).json({
        message: "Success",
        product: response,
      });
    })
    .catch((error) =>
      res.status(500).json({
        message: error,
      })
    );
});

module.exports = router;
