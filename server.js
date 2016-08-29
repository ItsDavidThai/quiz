var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server')
var App = require('./components/App.jsx')

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){

  console.log('request to root')
  var html = ReactDOMServer.renderToString(<App />)
  res.send(html)

})






module.exports = app;