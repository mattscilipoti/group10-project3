var express = require('express');
var router = express.Router();
var DB = require('../../config/connection');
var Question = DB.models.Question;


function error(response, message){
  response.status(500);
  response.json({error: message})
}


//index of questions
router.get("/questions", function (req, res) {
  Question.findAll({order: "id"}).then(function (questions) {
    res.json(questions);
  });
});

//create a new question
router.post("/questions", function (req, res) {
  Question.create(req.body).then(function (question) {
    res.json(question);
  });
});

//show a question with id ":id"
router.get("/questions/:id", function (req, res) {
  Question.findById(req.params.id).then(function (question) {
    res.json(question);
  });
});

//update a question with id ":id"
router.put("/questions/:id", function (req, res) {
  Question.findById(req.params.id)
  .then(function (question) {
    if(!question) return error(res, "not found");
    return question.updateAttributes(req.body);
  })
  .then(function (question) {
    res.json(question);
  });
});

//delete a question with id ":id"
router.delete("/questions/:id", function (req, res) {
  Question.findById(req.params.id)
  .then(function(question){
    if(!question) return error(res, "not found");
    return question.destroy()
  })
  .then(function(question){
    res.json(question)
  });
})


module.exports = router;
