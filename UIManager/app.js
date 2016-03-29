var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(50001);
console.log("Tripti's UI manger is running on port " + 50001);