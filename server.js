var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server')
var ReactDOM = require('react-dom')
// var App = require('./components/App.jsx')


// var _ = require('underscore')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.render('index')
})

app.post('/add', function(req, res){
  res.writeHeader(200)
  res.end()
  console.log('this is connected')
})
app.get('/remove', function(req, res){
  res.writeHeader(200)
  res.end()
  console.log('this is removing')
})
app.use(express.static(__dirname + '/'))





module.exports = app;