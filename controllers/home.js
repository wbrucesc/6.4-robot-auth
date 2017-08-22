const data = require('../models/data');

const HomeController = {
  index: function(req, res){
    res.render('index', {bots: data});
  }
};


module.exports = HomeController;
