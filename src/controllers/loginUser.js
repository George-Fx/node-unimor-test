const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js'); 

const loginUser = async (req, res, next) => {
  // const userName = req.body.userName;
  // res.send(`This is ${userName}`);
  try {

    const user = await User.findOne({userName: req.body.userName});
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({id: user._id}, 'your_jwt_secret', {expiresIn: '1h'});

    res.status(200).json({user, token});
  } catch (error) {
    console.error(error);
    res.status(400).json({error: error.message});
  }
};

module.exports = {loginUser};
