const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL = "mongodb://localhost:27017/mastery";

const Mongo_connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);

    console.log("connection successfull".bgBlue);
  } catch (error) {
    console.log("failed to connect db".bgRed);
  }
};

module.exports = Mongo_connect;
