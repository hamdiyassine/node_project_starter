const express = require('express');
const userRouter = express.Router();
const UserCtrl = require('../controllers/usersCtrl');

userRouter.post('/signup', UserCtrl.signup);

module.exports = userRouter;

