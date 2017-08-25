const Robot = require('../models/data');

const HomeController = {
  index: function(req, res){
    Robot.find().then(function(robots){
      res.render('index', {robots: robots});
    });
  }
};




// const HomeController = {
//   index: function(req, res){
//     Robot.showBots(function(err, results){
//       res.render('index', {name: name});
//     });
//   }
// };


module.exports = HomeController;
