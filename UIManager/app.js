var express = require('express');
var app = express();
var port = 80;
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(port);
console.log("Tripti's UI manger is running on port " + port);