var express = require('express');
var router = express.Router();
var DB = require('../../config/connection');
var Answer = DB.models.Answer;


function error(response, message){
  response.status(500);
  response.json({error: message})
}


module.exports = router;
