const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: { type: String, required: true, default: "" },
    lastname: { type: String, required: true, default: "" },
    email: { type: String, required: true, unique: true },
    banned: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("users", usersSchema);

module.exports = users;
