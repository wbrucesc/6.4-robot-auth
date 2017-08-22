const express = require('express');
const HomeController = require('./controllers/home');
const ProfileController = require('./controllers/profile');
const InviteController = require('./controllers/request');
const LookingController = require('./controllers/looking');
const WorkingController = require('./controllers/working');


module.exports = function(app){
  const homeRouter = express.Router();
  const profileRouter = express.Router();
  const inviteRouter = express.Router();
  const lookingRouter = express.Router();
  const workingRouter = express.Router();

  homeRouter.get('/', HomeController.index);

  profileRouter.get('/:name', ProfileController.profile);

  inviteRouter.get('/', InviteController.request);

  lookingRouter.get('/', LookingController.looking);

  workingRouter.get('/', WorkingController.working);

  app.use('/', homeRouter);
  app.use('/user', profileRouter);
  app.use('/request', inviteRouter);
  app.use('/looking', lookingRouter);
  app.use('/working', workingRouter);
};
