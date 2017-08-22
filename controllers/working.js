const data = require('../models/data');

const WorkingController = {
  working: function(req, res) {
    res.render('working', {bots: data});
  }
};


module.exports = WorkingController;
