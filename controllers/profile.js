const data = require('../models/data');

const ProfileController = {
  profile: function(req, res){
    let userName = req.params.name;                 //allows you to target a specific user by their name
    let targetUser;
    data.users.forEach((user) => {
      if(user.name == userName){
        targetUser = user;
      }
    });
    res.render('profile', {user: targetUser});      //if name clicked renders profile with user info
  }
};

module.exports = ProfileController; 
