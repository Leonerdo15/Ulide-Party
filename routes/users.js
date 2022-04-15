const express = require('express');
const client = require("../API/connection");
const router = express.Router();

client.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.query('Select * from users', (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
  });
  client.end;
});

module.exports = router;
