var app = require('./server.js');

console.log(app.listen)
var port = process.env.PORT || 4568;
app.listen(port);

console.log('Server now listening on port ' + port);
