# Youtube-Subscribers

This project is a javascript backend application that provides APIs for managing YouTube subscribers

The APIs provided by this application include the following:

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of subscribers with only two fields name and subscribedChannel

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

## Prerequisites

Before running this application, you must have the following installed:

- Express
- Mongoose
- Raw data
- Postman
- nodemon
- dotenv
- swagger-jsdoc
- swagger-ui-express
- @faker-js/faker

## Folder Structure


│
├── /src
│   ├── /controllers         # Controller files handling business logic
│   │   └── subscribers.js   # Functions for handling subscriber-related requests
│   │
│   ├── /models              # Mongoose schemas and models
│   │   └── subscribers.js   # Mongoose schema for subscribers
│   │
│   ├── /routes              # Route definitions
│   │   └── subscribers.js   # Defines routes and connects them to controllers
│   │
│   ├── Data.js              # For Generating random data
│   │
│   ├── createDatabase.js    # Script to populate the database with initial data
│   ├── index.html           # HTML file to show sample output 
│   └── server.js            # Entry point for starting the server and connecting to the database
│
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation





