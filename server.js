/// <reference path ="_reference.ts"/>
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//Main Route
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});
//Route Info Page
app.get('/projects', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "projects.html"));
});
app.listen(port, function () {
    console.log("Sakib's Website Server Has Started On Port: " + port);
});
//# sourceMappingURL=server.js.map