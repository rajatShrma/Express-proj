const express = require("express");

var router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Order GET  API works",
  });
});
router.post("/", (req, res, next) => {
  const order = {
    Id: req.body.id,
    Total: req.body.total,
  };
  res.status(200).json({
    message: "Order Created",
    order: order,
  });


  // Using MSSql as data base. But need to fix some issue for that.
  /*
  router.get("/", (req, res, next) => {
    var sql = require("mssql");
    var config = {
      user: "DESKTOP-95NI2TR\rajat",
      password: "",
      server: "localhost",
      database: "nbsqa",
    };

    // Connecting Database
    sql.connect(config, (err) => {
      if (err) console.log(err);

      // Create Request Object
      var request = new sql.Request();

      // Query to database.
      request.query("SELECT TOP(5) * FROM Orders", (err, recordSet) => {
        if (err) console.log("error on getting data from db.", err);
        // Send records
        res.status(200),
          json({
            data: recordSet,
          });
      });
    });
  }); */
});

module.exports = router;
