var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ message: 'Hello World', message2: 'Hello World2' });
});

module.exports = router;