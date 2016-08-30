var db = require('../db/config.js');

module.exports = {
  tasks: {
    get: function (req, res) {
      db.Tasks.findAll()
        .then(function(tasks) {
          console.log(tasks)
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

  }
}