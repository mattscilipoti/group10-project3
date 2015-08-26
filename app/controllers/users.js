var express = require('express');
var router = express.Router();
var DB = require('../../config/connection');
var User = DB.models.User;


function error(response, message){
  response.status(500);
  response.json({error: message})
}

//index of users
router.get("/users", function (req, res) {
  User.findAll({order: "id"}).then(function (users) {
    res.json(users);
  });
});

//create a new user
router.post("/users", function (req, res) {
  User.create(req.body).then(function (user) {
    res.json(user);
  });
});

//show a user with id ":id"
router.get("/users/:id", function (req, res) {
  User.findById(req.params.id).then(function (user) {
    res.json(user);
  });
});

//update a user with id ":id"
router.put("/users/:id", function (req, res) {
  User.findById(req.params.id)
  .then(function (user) {
    if(!user) return error(res, "not found");
    return user.updateAttributes(req.body);
  })
  .then(function (user) {
    res.json(user);
  });
});

//delete a user with id ":id"
router.delete("/users/:id", function (req, res) {
  User.findById(req.params.id)
  .then(function(user){
    if(!user) return error(res, "not found");
    return user.destroy()
  })
  .then(function(user){
    res.json(user)
  });
})


module.exports = router;
