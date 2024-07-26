const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

// Import routes:-
app.use("/subscribers", require("./routes/subscribers"));

// Connecting To Databases :-
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected To Databases Successfully");
  } catch (error) {
    console.log("Databases Connection Error", error);
    process.exit(1);
  }
};
connectToDatabase();

// Starting The Server:-
const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log(`Sever is listening on Port ${Port}`);
});
