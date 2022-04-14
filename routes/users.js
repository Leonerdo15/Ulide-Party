var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"},{name:"John Lock", birthDate: "06/08/1782"}];
  res.send(users);
});

module.exports = router;
