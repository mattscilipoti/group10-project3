var Question = function (info) {
  this.title = info.title;
  this.content = info.content;
  this.category = info.category;
  this.id = info.id;
}

Question.fetch = function(){
  var request = $.getJSON("http://localhost:3000/questions")
  .then(function(response) {
    console.log(response);
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

// Question.prototype.fetchAnswers = function(){
//   var url = "http://localhost:3000/questions/" + this.id + "/answers"
//   var request = $.getJSON(url)
//   .then(function(response){
//     var answers = []
//     for(var i = 0; i < response.length; i++){
//       // TODO: should this be this.songs?
//       answers.push(new Answer(response[i]))
//     }
//     return answers
//     })
//   .fail(function(repsonse){
//     console.log("js failed to load")
//     })
//   return request
// }
