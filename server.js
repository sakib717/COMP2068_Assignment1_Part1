/// <reference path ="_reference.ts"/>
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//Main Route
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, "Public", "home.html"));
});
//Route Projects Page
app.get('/projects', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "projects.html"));
});
//Route About Me Page
app.get('/aboutme', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "aboutme.html"));
});
//Route Services Page
app.get('/services', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "services.html"));
});
//Route Contact Page
app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, "Public", "contact.html"));
});
app.listen(port, function () {
    console.log("Sakib's Website Server Has Started On Port: " + port);
});
//# sourceMappingURL=server.js.map