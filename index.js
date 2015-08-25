var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");



var questionsController = require("./app/controllers/questions");
var answersController = require("./app/controllers/answers");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/app/assets", express.static(path.join(__dirname + "/app/assets")));
app.set("view engine", "hbs")

app.get("/", function(req, res){
  // var questionModel = require("app/models/question.js")
  // console.log("working?");
  // var question = Questions;
  res.render("index", {})
});

app.use("/", questionsController);
app.use("/", answersController);

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
