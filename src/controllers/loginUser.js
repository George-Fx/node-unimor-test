const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); 

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({userName: req.body.userName});
    if (!user) {
      res.send(`This is ${userName}`);
    } else {
      res.send(`This is no ${userName}`);
    }

  } catch (error) {
  }
};

module.exports = {loginUser};
