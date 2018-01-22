var express = require("express");
var app = express();
var path = require("path");
var helmet = require('helmet')
app.use(helmet());
app.use(express.static('www'));
app.use(helmet());
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
    //__dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});