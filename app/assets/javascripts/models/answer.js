var Answer = function(info){
  this.content = info.content;
  this.score = info.score;
  this.question_id = info.question_id;
  this.user_id = info.user_id;
  this.id = info.id
}

Answer.fetch().then(function (answers) {
  answers.forEach(function (answer) {
    var view = new AnswerView(answer)
    view.render();
  })
})

Answer.fetch = function(){
  var request = $.getJSON("http://localhost:3000/answers")
  .then(function(response) {
    console.log(response);
    var answers = []
    for(var i = 0; i < response.length; i++){
      answers.push(new Answer(response[i]))
    }
    return answers
    })
  .fail(function(response){
      console.log("js failed to load")
    })
  return request
}
