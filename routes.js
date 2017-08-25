const express = require('express');
const passport =  require('passport');

const HomeController = require('./controllers/home');
const ProfileController = require('./controllers/profile');
const InviteController = require('./controllers/request');
const LookingController = require('./controllers/looking');
const WorkingController = require('./controllers/working');
const UserController = require('./controllers/user');


module.exports = function(app){
  const homeRouter = express.Router();
  const profileRouter = express.Router();
  const inviteRouter = express.Router();
  const lookingRouter = express.Router();
  const workingRouter = express.Router();
  const userRouter = express.Router();

  const requireLogin = function (req, res, next) {
  if (req.user) {                   //checks to see if there is a user, if not redirect to login
    next();
  } else {
    res.redirect('/login');
  }
};

  homeRouter.use(requireLogin);     //requires login before displaying home page 
  homeRouter.get('/', HomeController.index);

  //User routes
  userRouter.get('/login', UserController.login);
  userRouter.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  userRouter.get('/signup', UserController.signup);
  userRouter.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));


  profileRouter.get('/:name', ProfileController.profile);

  inviteRouter.get('/', InviteController.request);

  lookingRouter.get('/', LookingController.looking);

  workingRouter.get('/', WorkingController.working);


  app.use('/user', profileRouter);
  app.use('/request', inviteRouter);
  app.use('/looking', lookingRouter);
  app.use('/working', workingRouter);
  app.use('/', userRouter);
  app.use('/', homeRouter);
};
