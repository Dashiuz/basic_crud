const express = require("express");
const dbconn = require("./db-connection");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
dbconn();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./users_routes"));

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("the server started at port ", port);
});
