const colors = require("colors");
const mongoose = require("mongoose");

const url = process.env.MONGO_URL;


// Logic for connect the MongoDB with Node.js using mongoose - ODM
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connection with MongoDB is Successfull".yellow);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
