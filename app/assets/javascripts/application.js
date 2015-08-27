$(document).ready(function () {
  QuestionView.prototype.template = $("#entryTemplate").html();
  Question.fetch().then(function (questions) {
    questions.forEach(function (question) {
      var view = new QuestionView(question)
      view.render();
    })
  })

  Answer.fetch().then(function (answers) {
    answers.forEach(function (answer) {
      var view = new AnswerView(answer)
      view.render();
    })
  })

 $(".question-content").hide();
 $("#new-question").hide();
   $(".ask-button").click(function(){
       $("#new-question").toggle();
       $(".main").toggle();
   })


  $("#new-answer").hide();
  $("#share_answer").click(function(){
      $("#answer_form").toggle();
  });
})
