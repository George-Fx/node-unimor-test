const User = require('../models/user.js'); 

const loginUser = async (req, res, next) => {
  try {
    const user = req.body.userName;
    if (!user) {
      res.send(`This is ${userName}`);
    } else {
      res.send(`This is no ${userName}`);
    }

  } catch (error) {
  }
};

module.exports = {loginUser};
