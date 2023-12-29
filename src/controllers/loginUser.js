const User = require('../models/user.js'); 

const loginUser = async (req, res, next) => {
  try {
    const name = req.body.userName;
    // res.send(`This is ${userName}`);
    if (!name) {
      res.send(`This is ${userName}`);
    } else {
      res.send(`This is no ${userName}`);
    }

  } catch (error) {
  }
};

module.exports = {loginUser};
