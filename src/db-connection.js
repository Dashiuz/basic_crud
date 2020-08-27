const mongoose = require("mongoose");

const db_url =
  "mongodb+srv://admin:admin@cluster0.zx62g.mongodb.net/<dbname>?retryWrites=true&w=majority";

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
