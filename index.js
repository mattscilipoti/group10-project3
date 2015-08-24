var express = require('express');
var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", express.static(path.join(__dirname + "/app/assets")));

app.get("/", function (req, res) {
  res.send("ayyyy")
})




app.listen(3000, function(){
  console.log("app listening on port 3000")
})
