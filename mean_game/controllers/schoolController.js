const school = require('../api/data/school.json');
module.exports.getAll = function(req, res) {
    res.status(process.env.STATUS_OK).json(school);
}
module.exports.getOne = function(req, res) {
    res.status(process.env.STATUS_OK).json(school[req.params.id]);
}