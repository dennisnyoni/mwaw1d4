require('dotenv').config();
const dbConnection = require("../api/data/dbconnection.js");
const { get } = require('../api/data/dbconnection.js');
console.log(get)
const db = get; //
console.log('db ' + db);

const games = require('../api/data/games.json');
module.exports.getAll = function(req, res) {
    const db = dbConnection.get();
    const gamesCollection = db.collection('games');
    console.log(db);
    gamesCollection.find().toArray(function(err, games) {
        res.status(process.env.STATUS_OK).json(games);
    });
    console.log("db", db);

    res.status(process.env.STATUS_OK).json(games);
}
module.exports.getOne = function(req, res) {
    res.status(process.env.STATUS_OK).json(games[req.params.id]);
}