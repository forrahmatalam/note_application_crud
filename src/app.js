const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/notes.route');


const app = express();
app.use(express.json());
connectDB();

        //postApis
app.use("/notes",routes);


module.exports = app;



