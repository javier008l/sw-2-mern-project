//Imporrtación de framework express para realizar solicitudes http
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//poder acceder a leer archivo .env
require("dotenv").config(); 

const CONNECTION_PORT = process.env.PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`Server running on port ${CONNECTION_PORT}`);
});

const mongo_connect = () => {
    try {
        mongoose
        .connect(process.env.DATABASE_CONNECTION_STRING)
        .then(() => {
            console.log("Connected to the database");
          })
          .catch((err) => {
            console.log("Error connecting to the database");
          });
    } catch (error) {
        console.log(err);
    }
}

mongo_connect();