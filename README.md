# Youtube-Subscribers

This project is a javascript backend application that provides APIs for managing YouTube subscribers

The APIs provided by this application include the following:

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of subscribers with only two fields name and subscribedChannel

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

## Live Demo

You can view the live version of the app here: [Youtube Subscribers](https://youtube-subscribers-kv18.onrender.com/api-docs/)

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

├─ src  
│ ├─ controllers  
│ │ └─ subscribers.js  
│ ├─ models  
│ │ └─ subscribers.js  
│ ├─ routes  
│ │ └─ subscribers.js  
│ ├─ createDatabase.js  
│ ├─ data.js  
│ ├─ server.js  
├─ .gitignore  
├─ package-lock.json  
├─ package.json              





