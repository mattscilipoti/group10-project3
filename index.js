var express = require('express');
var app = express();



var questionsController = require("./app/controllers/questions");
var answersController = require("./app/controllers/answers");
=======
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname + "/app/assets")));


app.get("/", function (req, res) {
  res.send("ayyyyy")
})


app.use("/", questionsController);
app.use("/", answersController);

app.listen(3000, function(){
  console.log("app listening on port 3000")
})
