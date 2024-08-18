const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./.env" });
const router = require("./routes/subscribers");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors")

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Swagger Setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Updated to OpenAPI 3.0.0
    info: {
      title: 'YouTube Subscribers API',
      version: '1.0.0',
      description: 'API for managing YouTube subscribers',
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.use("/subscribers", router);

// Connecting To Databases
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected To Database Successfully test");
  } catch (error) {
    console.log("Database Connection Error", error);
    process.exit(1);
  }
};
connectToDatabase();

// Starting The Server
const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log(`Server is listening on Port ${Port}`);
});
