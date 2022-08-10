const express = require('express');
const pingControler = require('../controllers/pingControler');

const router = express.Router();

router.get('/', pingControler.returnPong);

module.exports = router;