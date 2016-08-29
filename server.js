require('babel-register')({
    presets: ['react']
})
var express = require('express');
var app = express();
var React = require('react');

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){

  console.log('request to root')
  res.render('layout')
})


module.exports = app;