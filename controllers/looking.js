const data = require('../models/data');

const LookingController = {
  looking: function(req, res) {
    res.render('looking', {bots: data});
  }
};

module.exports = LookingController;
