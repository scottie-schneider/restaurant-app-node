const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'wes'};
  //res.json(wes);
  //res.send('Hey! It works!');
  //res.send(req.query.name);
  res.render('hello');
});

module.exports = router;
