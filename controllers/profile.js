const User = require('../models/user');

const ProfileController = {
  profile: function(req, res){
    let botName = req.params.name;               //allows you to target a specific user by their name
    User.findOne({name: botName}).then(function(user){
      res.render('profile', user);               //if name clicked renders profile with user info
    });
  }
};

module.exports = ProfileController;
