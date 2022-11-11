const express = require('express');
require('dotenv');
const router = express.Router();
const gamesController = require('../controllers/gameController');

router.route('')
    .get(gamesController.getAll);

router.route('/:gameId')
    .get(gamesController.getOne)
    .delete(gamesController.deleteOne);


router.route('/divide/:num1')
    .get(function(req, res) {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.query.num2);
        res.status(200).send("" + num1 / num2);
    });
module.exports = router;