require('dotenv').config();
//const dbConnection = require("../api/data/dbconnection.js");
const { get } = require('../api/data/dbconnection.js');
//dbConnection.open();
console.log(get)
const db = get; //.db("games");
console.log('db ' + db);

const games = require('../api/data/games.json');
module.exports.getAll = function(req, res) {
    console.log("db", db);
    res.status(process.env.STATUS_OK).json(games);
}
module.exports.getOne = function(req, res) {
    res.status(process.env.STATUS_OK).json(games[req.params.id]);
}