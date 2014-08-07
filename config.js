var express = require("express");

module.exports = function(app, io){

//html is the default template extension 
app.set("view engine", "html");

//this initializes the ejs template engine
app.engine("html", require("ejs").renderFile);

//this is where to find the templates
app.set("views", __dirname + "/views");

//making it avaialble everywhere baby!
app.use(express.static(__dirname + '/public'));


io.set("log level", 1);





};