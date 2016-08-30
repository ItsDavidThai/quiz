'use strict';

var Sequelize = require('sequelize');
var db = new Sequelize('todo', '', '', {

  dialect: 'sqlite'
});

var Tasks = db.define('tasks', {
  taskname: Sequelize.STRING
});

Tasks.sync().then(function () {
  // Table created
  // return Tasks.create({
  //   taskname: 'jog',

  // });
  console.log('synced!');
});

exports.Tasks = Tasks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJTZXF1ZWxpemUiLCJyZXF1aXJlIiwiZGIiLCJkaWFsZWN0IiwiVGFza3MiLCJkZWZpbmUiLCJ0YXNrbmFtZSIsIlNUUklORyIsInN5bmMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWUMsUUFBUSxXQUFSLENBQWhCO0FBQ0EsSUFBSUMsS0FBSyxJQUFJRixTQUFKLENBQWMsTUFBZCxFQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE2Qjs7QUFFcENHLFdBQVE7QUFGNEIsQ0FBN0IsQ0FBVDs7QUFPQSxJQUFJQyxRQUFRRixHQUFHRyxNQUFILENBQVUsT0FBVixFQUFtQjtBQUM3QkMsWUFBVU4sVUFBVU87QUFEUyxDQUFuQixDQUFaOztBQUtBSCxNQUFNSSxJQUFOLEdBQWFDLElBQWIsQ0FBa0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMsVUFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxDQVBEOztBQVdBQyxRQUFRUixLQUFSLEdBQWdCQSxLQUFoQiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG52YXIgZGIgPSBuZXcgU2VxdWVsaXplKCd0b2RvJywgJycsICcnLHtcblxuICBkaWFsZWN0OidzcWxpdGUnLFxuICAvLyAvLyBTUUxpdGUgb25seVxuICAvLyBzdG9yYWdlOiAndG9kby5kYidcbn0pO1xuXG52YXIgVGFza3MgPSBkYi5kZWZpbmUoJ3Rhc2tzJywge1xuICB0YXNrbmFtZTogU2VxdWVsaXplLlNUUklOR1xufSk7XG5cblxuVGFza3Muc3luYygpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAvLyBUYWJsZSBjcmVhdGVkXG4gIC8vIHJldHVybiBUYXNrcy5jcmVhdGUoe1xuICAvLyAgIHRhc2tuYW1lOiAnam9nJyxcblxuICAvLyB9KTtcbiAgY29uc29sZS5sb2coJ3N5bmNlZCEnKVxufSk7XG5cblxuXG5leHBvcnRzLlRhc2tzID0gVGFza3M7Il19