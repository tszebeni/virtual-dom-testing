var hscript = require('html2hscript');
var bodyParser = require('body-parser');

var express = require('express');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/hscript.js', function(req, res) {
    hscript(req.query.html, function (err, hscript) {
        res.type('application/javascript');
        res.send(req.query.callback + '(\'' + hscript + '\')');
    });
});

module.exports = router;
