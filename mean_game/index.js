require('dotenv').config();
//require('./api/data/dbconnection').open();
const express = require('express');
const path = require('path');
const routesForStudent = require('./routes/students');
const routesForGames = require('./routes/games');


const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(routesForStudent);
app.use(routesForGames);

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_LISTEN_MSG + server.address().port);
});