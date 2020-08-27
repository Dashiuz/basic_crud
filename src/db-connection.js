const mongoose = require("mongoose");

const db_url =
  "";

const dbconn = async () => {
  await mongoose
    .connect(db_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((success) => {
      console.log("Database connection has been stablished...");
    })
    .catch((ex) => {
      return console.log("HANDLED ERROR: ", ex);
    });
};

module.exports = dbconn;
