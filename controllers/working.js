const Robot = require('../models/data');

const WorkingController = {
  working: function(req, res) {
    Robot.find().then(function(robots) {
      res.render('working', {robots: robots});
    });
  }
};


module.exports = WorkingController;
