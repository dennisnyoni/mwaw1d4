require('dotenv').config();
require('./api/data/dbconnection').open();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routesForStudent = require('./routes/students');
const routesForGames = require('./routes/games');


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/games", routesForGames);
app.use(routesForStudent);


const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_LISTEN_MSG + server.address().port);

});