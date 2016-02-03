/// <reference path ="_reference.ts"/>
import express = require('express');

var app:express.Express = express();

var port:number = process.env.port || 3000;

//Main Route
app.get('/', function (req:express.Request, res:express.Response, next:any) {
    res.send("My Website Is On Its Way!");
});

//Route Info Page
app.get('/info', function (req:express.Request, res:express.Response){
   res.send("My Info Page Goes Here!"); 
});

app.listen(port, function(){
    console.log("Sakib's Website Server Has Started On Port: " + port);
});



















/*
import http = require('http');

var port:number = process.env.port || 3000;

var server = http.createServer(
    function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("Website!");
});

server.listen(port, function(){
    console.log("Server Website Started...Listening On Port: " + port);
}); */