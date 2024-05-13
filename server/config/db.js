const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL = process.env.MONGO_URL;

const Mongo_connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);

    console.log("connection successfull".bgBlue);
  } catch (error) {
    console.log("failed to connect db".bgRed);
  }
};

module.exports = Mongo_connect;
