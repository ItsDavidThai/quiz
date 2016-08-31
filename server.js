var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server')
var ReactDOM = require('react-dom')
var controller = require('./controller/controllers.js')
// var App = require('./components/App.jsx')


// var _ = require('underscore')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  res.render('index')
})
app.get('/fetch', function(req, res){
  controller.tasks.get(req, res)

  console.log('this is fetching')
})
app.post('/add', function(req, res){
  controller.tasks.post(req, res)
  // controller.tasks.get(req, res)
  res.writeHeader(200)
  res.end()
  console.log('this is connected')
})
app.post('/remove', function(req, res){
  controller.remove.post(req, res)
  res.writeHeader(200)
  res.end()
  console.log('this is removing')
})

app.use(express.static(__dirname + '/'))





module.exports = app;