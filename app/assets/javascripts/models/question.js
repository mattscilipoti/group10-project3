var Question = function (info) {
  this.title = info.title;
  this.content = info.content;
  this.category = info.category;
  this.id = info.id;
}

Question.fetch = function(){
  var request = $.getJSON("http://localhost:3000/questions")
  .then(function(response) {
    var questions = []
    for(var i = 0; i < response.length; i++){
      questions.push(new Question(response[i]))
    }
    return questions
    })
  .fail(function(response){
      console.log("js failed to load")
    })
  return request
}
