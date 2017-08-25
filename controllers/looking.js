const User = require('../models/user');

const LookingController = {
  looking: function(req, res) {
    User.find().then(function(users){
      res.render('looking', {users: users});
    });
  }
};

module.exports = LookingController;
