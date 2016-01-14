var express = require('express');
var port = 8080;

var app = express();
app.use(express.static('client'));

app.use('/api/', require('./hscript.js'));

app.listen(port, function () {
    console.log('Virtual-dom testing app listening on port ' + port + '.');
});