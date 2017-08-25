const Robot = require('../models/data');

const LookingController = {
  looking: function(req, res) {
    Robot.find().then(function(robots){
      res.render('looking', {robots: robots});
    });
  }
};

module.exports = LookingController;
