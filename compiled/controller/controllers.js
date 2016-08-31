'use strict';

var db = require('../db/config.js');

module.exports = {
  tasks: {
    get: function get(req, res) {
      db.Tasks.findAll().then(function (tasks) {
        console.log('this is the tasks from table', tasks[0].dataValues);
        res.send(tasks);
      }).catch(function (err) {
        console.log(err);
      });
    },
    post: function post(req, res) {
      console.log(req.body, 'reqbody-----------');
      db.Tasks.create({ taskname: req.body.task });
    }
    // },

  }
};

// module.exports.tasks.get()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcnMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRhc2tzIiwiZ2V0IiwicmVxIiwicmVzIiwiVGFza3MiLCJmaW5kQWxsIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVmFsdWVzIiwic2VuZCIsImNhdGNoIiwiZXJyIiwicG9zdCIsImJvZHkiLCJjcmVhdGUiLCJ0YXNrbmFtZSIsInRhc2siXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsS0FBS0MsUUFBUSxpQkFBUixDQUFUOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFNBQU87QUFDTEMsU0FBSyxhQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDdkJQLFNBQUdRLEtBQUgsQ0FBU0MsT0FBVCxHQUNHQyxJQURILENBQ1EsVUFBU04sS0FBVCxFQUFnQjtBQUNwQk8sZ0JBQVFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q1IsTUFBTSxDQUFOLEVBQVNTLFVBQXJEO0FBQ0FOLFlBQUlPLElBQUosQ0FBU1YsS0FBVDtBQUVELE9BTEgsRUFNR1csS0FOSCxDQU1TLFVBQVNDLEdBQVQsRUFBYTtBQUNsQkwsZ0JBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNELE9BUkg7QUFTRCxLQVhJO0FBWUxDLFVBQU0sY0FBVVgsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3hCSSxjQUFRQyxHQUFSLENBQVlOLElBQUlZLElBQWhCLEVBQXNCLG9CQUF0QjtBQUNBbEIsU0FBR1EsS0FBSCxDQUFTVyxNQUFULENBQWdCLEVBQUNDLFVBQVVkLElBQUlZLElBQUosQ0FBU0csSUFBcEIsRUFBaEI7QUFFRDtBQUNIOztBQWpCTztBQURRLENBQWpCOztBQXVCQSIsImZpbGUiOiJjb250cm9sbGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkYiA9IHJlcXVpcmUoJy4uL2RiL2NvbmZpZy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGFza3M6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgICAgZGIuVGFza3MuZmluZEFsbCgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHRhc2tzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHRhc2tzIGZyb20gdGFibGUnLCB0YXNrc1swXS5kYXRhVmFsdWVzKVxuICAgICAgICAgIHJlcy5zZW5kKHRhc2tzKVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBwb3N0OiBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LCAncmVxYm9keS0tLS0tLS0tLS0tJylcbiAgICAgIGRiLlRhc2tzLmNyZWF0ZSh7dGFza25hbWU6IHJlcS5ib2R5LnRhc2t9KVxuXG4gICAgfVxuICAvLyB9LFxuXG4gIH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMudGFza3MuZ2V0KClcbiJdfQ==