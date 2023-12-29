const express = require('express');
const router = express.Router();

router.get('/getmethod', (req, res) => {
  res.send('This is get method!');
});

module.exports = router;