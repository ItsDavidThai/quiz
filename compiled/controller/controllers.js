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

  },
  remove: {
    post: function post(req, res) {
      console.log(req.body, 'reqbody-----------');
      db.Tasks.destroy({ where: { taskname: req.body.taskname } });
    }

  }
};

// module.exports.tasks.get()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXIvY29udHJvbGxlcnMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInRhc2tzIiwiZ2V0IiwicmVxIiwicmVzIiwiVGFza3MiLCJmaW5kQWxsIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVmFsdWVzIiwic2VuZCIsImNhdGNoIiwiZXJyIiwicG9zdCIsImJvZHkiLCJjcmVhdGUiLCJ0YXNrbmFtZSIsInRhc2siLCJyZW1vdmUiLCJkZXN0cm95Iiwid2hlcmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsS0FBS0MsUUFBUSxpQkFBUixDQUFUOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFNBQU87QUFDTEMsU0FBSyxhQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDdkJQLFNBQUdRLEtBQUgsQ0FBU0MsT0FBVCxHQUNHQyxJQURILENBQ1EsVUFBU04sS0FBVCxFQUFnQjtBQUNwQk8sZ0JBQVFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q1IsTUFBTSxDQUFOLEVBQVNTLFVBQXJEO0FBQ0FOLFlBQUlPLElBQUosQ0FBU1YsS0FBVDtBQUVELE9BTEgsRUFNR1csS0FOSCxDQU1TLFVBQVNDLEdBQVQsRUFBYTtBQUNsQkwsZ0JBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNELE9BUkg7QUFTRCxLQVhJO0FBWUxDLFVBQU0sY0FBVVgsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3hCSSxjQUFRQyxHQUFSLENBQVlOLElBQUlZLElBQWhCLEVBQXNCLG9CQUF0QjtBQUNBbEIsU0FBR1EsS0FBSCxDQUFTVyxNQUFULENBQWdCLEVBQUNDLFVBQVVkLElBQUlZLElBQUosQ0FBU0csSUFBcEIsRUFBaEI7QUFFRDtBQUNIOztBQWpCTyxHQURRO0FBcUJmQyxVQUFPO0FBQ0xMLFVBQU0sY0FBVVgsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3hCSSxjQUFRQyxHQUFSLENBQVlOLElBQUlZLElBQWhCLEVBQXNCLG9CQUF0QjtBQUNBbEIsU0FBR1EsS0FBSCxDQUFTZSxPQUFULENBQWlCLEVBQUNDLE9BQU0sRUFBQ0osVUFBVWQsSUFBSVksSUFBSixDQUFTRSxRQUFwQixFQUFQLEVBQWpCO0FBRUQ7O0FBTEk7QUFyQlEsQ0FBakI7O0FBK0JBIiwiZmlsZSI6ImNvbnRyb2xsZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRiID0gcmVxdWlyZSgnLi4vZGIvY29uZmlnLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0YXNrczoge1xuICAgIGdldDogZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgICBkYi5UYXNrcy5maW5kQWxsKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24odGFza3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgdGFza3MgZnJvbSB0YWJsZScsIHRhc2tzWzBdLmRhdGFWYWx1ZXMpXG4gICAgICAgICAgcmVzLnNlbmQodGFza3MpXG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHBvc3Q6IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHksICdyZXFib2R5LS0tLS0tLS0tLS0nKVxuICAgICAgZGIuVGFza3MuY3JlYXRlKHt0YXNrbmFtZTogcmVxLmJvZHkudGFza30pXG5cbiAgICB9XG4gIC8vIH0sXG5cbiAgfSxcbiAgcmVtb3ZlOntcbiAgICBwb3N0OiBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LCAncmVxYm9keS0tLS0tLS0tLS0tJylcbiAgICAgIGRiLlRhc2tzLmRlc3Ryb3koe3doZXJlOnt0YXNrbmFtZTogcmVxLmJvZHkudGFza25hbWV9fSlcblxuICAgIH1cblxuICB9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzLnRhc2tzLmdldCgpXG4iXX0=