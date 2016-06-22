var express = require('express');
var router = express.Router();
var db      = require('../db.js');

router.post('/signup', function(req, res) {
  db.signup(req.body, function(err){
    if(!err)
    res.send({message:"success"});
    else {
      res.send({message:err});
    }
  })
});

module.exports = router;
