const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is get method!');
});

module.exports = router;