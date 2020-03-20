const express = require('express');
const mongoose = require('mongoose');
//const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const tasksRouter = require('./routes/tasks');

app.use('/tasks', tasksRouter );



//app.use(express.static(path.join(__dirname, "client", "build")))



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});