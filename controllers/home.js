const User = require('../models/user');

const HomeController = {
  index: function(req, res){
    User.find().then(function(users){
      res.render('index', {users: users});
    });
  },

  form: function(req, res){
    const botId = req.params.id;
    console.log(botId);

    if(!botId){
      res.render('form');
      return;
    }
    User.findOne({"_id": botId}).then(function(user){
      res.render('form', user);
    });
  },

  add: function(req, res){
    const avatar = req.body.avatar;
    const name = req.body.name;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const email = req.body.email;
    const phone = req.body.phone;
    const university = req.body.uni;
    const skill = req.body.skill;

    const newUser = new User({
      avatar: avatar,
      name: name,
      address: {
        city: city,
        state: state,
        country: country
      },
      email: email,
      phone: phone,
      university: university,
      skills: [{
        skill: skill
      }]

    });
    newUser.save(function(){
      res.redirect('/');
    });
  },

  edit: function(req, res){
    const botId = req.params.id;
    const avatar = req.body.avatar;
    const name = req.body.name;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const email = req.body.email;
    const phone = req.body.phone;
    const uni = req.body.uni;
    const skill = req.body.skill;

    User.findByIdAndUpdate(botId, {$set: {avatar: avatar,
      name: name,
      address: {
        city: city,
        state: state,
        country: country
      },
      email: email,
      phone: phone,
      university: university,
      skills: [{
        skill1: skill1,
        skill2: skill2,
        skill3: skill3
      }]
    }}).then(function(){
      res.redirect('/');
    });
  }

};


module.exports = HomeController;
