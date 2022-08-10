const express = require('express');
const pingControler = require('../controllers/pingControler');
const rescue = require('../middlewares/rescue');

const router = express.Router();

router.get('/', rescue(pingControler.returnPong));

module.exports = router;
