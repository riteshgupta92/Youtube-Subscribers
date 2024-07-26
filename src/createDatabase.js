const mongoose = require("mongoose");
const getData = require("./Data");
const Subscriber = require("./models/subscribers");
const dotenv = require("dotenv").config({path : "../.env"})

const connectToDatabase = async () => {
  try {
    console.log("url", process.env.DATABASE_URI);
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected To Databases Successfully");
  } catch (error) {
    console.log("Databases Connection Error", error);
    process.exit(1);
  }
};
connectToDatabase();

const insertIntoDatabase = async () => {
  try {
    // Fetch the data to be inserted
    const data = getData;

    // Insert the data
    const newSubscribers = await Subscriber.insertMany(data);

    console.log(`${newSubscribers.length} new subscribers added`);
  } catch (error) {
    console.log(error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

insertIntoDatabase();
