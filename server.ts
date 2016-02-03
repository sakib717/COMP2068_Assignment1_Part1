/// <reference path ="_reference.ts"/>
import express = require('express');
import path = require('path');


var app:express.Express = express();

var port:number = process.env.port || 3000;

//Main Route
app.get('/', function (req:express.Request, res:express.Response, next:any) {
   res.sendFile(path.join(__dirname, "Public", "home.html"));
});

//Route Projects Page
app.get('/projects', function (req:express.Request, res:express.Response){
  res.sendFile(path.join(__dirname, "Public", "projects.html"));
});

//Route About Me Page
app.get('/aboutme', function (req:express.Request, res:express.Response){
  res.sendFile(path.join(__dirname, "Public", "aboutme.html"));
});

//Route Services Page
app.get('/services', function (req:express.Request, res:express.Response){
  res.sendFile(path.join(__dirname, "Public", "services.html"));
});

//Route Contact Page
app.get('/contact', function (req:express.Request, res:express.Response){
  res.sendFile(path.join(__dirname, "Public", "contact.html"));
});

app.listen(port, function(){
    console.log("Sakib's Website Server Has Started On Port: " + port);
});


















