const express = require('express');
const router = express.Router();

const studentController = require('../controllers/schoolController');

require('dotenv');
router.route('/api/students')
    .get(studentController.getAll)

router.route('/api/students/:id')
    .get(studentController.getOne);

module.exports = router;