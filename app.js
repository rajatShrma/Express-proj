const express = require("express");
const morgan = require("morgan");

const productRoute = require("./API/product/product");
const orderRoute = require("./API/order/order");
const mongoose = require("mongoose");

var app = express();

// Middle ware to use before getting  to API
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SET DB CONNECTION
const ACCESS_PATH = "mongodb+srv://shyam:CYWUqMcs2exGGoLC@cluster0.8rvzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(ACCESS_PATH, {useNewUrlParser: true});

//Handling CORS error.
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*"); // This will allow to access API from different url. We can limit by passing (http://facebook.com:4000))url instead of '*'.
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // Browser makes this request before actual POST or PUT call, so that it can actually make the request or not.
  if (req.method === "OPTIONS") {
    // Supporting http methods will be added to the API call
    req.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  }
  next(); // So to move to the next API.
});

// Basic routing configuration for different API
app.use("/product", productRoute);
app.use("/order", orderRoute);

// Error handling middle ware.
app.use((error, req, res, next) => {
  res.status(404);
  res.json({
    message: "Couldn't find a requested url. Please check your url.",
  });
});
module.exports = app;
