var db = require('../db/config.js');

module.exports = {
  tasks: {
    get: function (req, res) {
      db.Tasks.findAll()
        .then(function(tasks) {
          console.log('this is the tasks from table', tasks[0].dataValues)
          res.send(tasks)

        })
        .catch(function(err){
          console.log(err)
        });
    },
    post: function (req, res) {
      console.log(req.body, 'reqbody-----------')
      db.Tasks.create({taskname: req.body.task})

    }
  // },

  },
  remove:{
    post: function (req, res) {
      console.log(req.body, 'reqbody-----------')
      db.Tasks.destroy({where:{taskname: req.body.taskname}})

    }

  }
}

// module.exports.tasks.get()
