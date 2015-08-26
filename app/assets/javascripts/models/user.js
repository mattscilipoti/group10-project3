var User = function (info) {
  this.username = info.username;
  this.fullname = info.fullname;
  this.email = info.email;
  this.position = info.position;
  this.id = info.id;
}

User.fetch = function(){
  var request = $.getJSON("http://localhost:3000/users")
  .then(function(response) {
    var users = [];
    for(var i = 0; i < response.length; i++){
      users.push(new User(response[i]));
    }
    return users;
    })
  .fail(function(response){
      console.log("js failed to load");
    });
  return request;
};
