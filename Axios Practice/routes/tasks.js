const express = require('express');
const router = express.Router();

const { getData , createData } = require('../controllers/test');

router.route('/').get(getData).post(createData);

module.exports = router;