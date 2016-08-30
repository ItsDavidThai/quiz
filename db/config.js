var Sequelize = require('sequelize');
var db = new Sequelize('todo', '', '',{

  dialect:'sqlite',
  // // SQLite only
  // storage: 'todo.db'
});

var Tasks = db.define('tasks', {
  taskname: Sequelize.STRING
});


Tasks.sync().then(function () {
  // Table created
  // return Tasks.create({
  //   taskname: 'jog',

  // });
  console.log('synced!')
});



exports.Tasks = Tasks;