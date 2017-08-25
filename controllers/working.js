const User = require('../models/user');

const WorkingController = {
  working: function(req, res) {
    User.find().then(function(users) {
      res.render('working', {users: users});
    });
  }
};


module.exports = WorkingController;
