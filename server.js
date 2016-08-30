var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server')
var App = require('./components/App.jsx')


// var _ = require('underscore')

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // var html = _.template(template, data);
  console.log('request to root')
  console.log(html)
  var html = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">'

  + ReactDOMServer.renderToString(<App data={[1,2,3,4]}/>)
  console.log(html)
  res.send(html)

})






module.exports = app;