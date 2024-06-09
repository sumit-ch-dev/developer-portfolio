const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// serve the index.html file

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
