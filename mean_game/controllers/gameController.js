require('dotenv').config();
const dbConnection = require("../api/data/dbconnection.js");
const { get } = require('../api/data/dbconnection.js');
console.log(get)
const db = get; //
console.log('db ' + db);

//const games = require('../api/data/games.json');

module.exports.getAll = function(req, res) {
    const db = dbConnection.get();
    const gamesCollection = db.collection('games');
    //console.log(db);
    gamesCollection.find().toArray(function(err, games) {
        res.status(process.env.STATUS_OK).json(games);
    });

}
module.exports.getOne = function(req, res) {
    const db = dbConnection.get();
    const gamesCollection = db.collection('games');
    console.log("gameId", req.params.gameId);
    gamesCollection.find().toArray(function(err, games) {
        res.status(process.env.STATUS_OK).json(games.filter(game => game._id == req.params.gameId)[0]);
    });
}

module.exports.deleteOne = function(req, res) {
    const db = dbConnection.get();
    const gamesCollection = db.collection('games');
    console.log("gameId", req.params.gameId);
    // gamesCollection.find().toArray(function(err, games) {
    //     res.status(process.env.STATUS_OK).json(games.filter(game => game._id == req.params.gameId)[0]);
    // });
    gamesCollection.deleteOne(function(err, game) {
        res.status(process.env.STATUS_OK).json(game);
    });
}