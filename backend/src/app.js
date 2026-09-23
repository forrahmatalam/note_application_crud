const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/notes.route');
const cors = require('cors');


const app = express();
app.use(express.json());
connectDB();

   //cors used for cross origin request
app.use(cors({
        origin: "http://localhost:5173",
}));




        //postApis
app.use("/notes",routes);


module.exports = app;



