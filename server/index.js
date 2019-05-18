const express = require("express");
const app = express();
const { Shoe } = require("../database/index.js");
const bodyParser = require("body-parser");
const port = 3001;

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api/description/:sku", (req, res) => {
  const sku = req.params.sku;
  Shoe.findOne({ sku })
    .exec((err, shoe) => {
      console.log(shoe);
    })
    .catch(err => {
      console.log("there was an error finding the item");
    });
  console.log(req.params.sku);
});

app.listen(port, () => {
  console.log("Ken's service listening on port, ", port);
});
