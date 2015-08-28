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

  $("#new-answer").hide();

  //event listener for each entry
  $(document).on('click','.entry',function(event){
    $(this).siblings().toggle();
    $(".entry-title").toggleClass("question-title")
    $(".question-content").toggle();
    // use $('selector).data() to get the id
    var questionId = $(this).data('id');
    console.log(questionId);
    // use jquery to modify the form, to use that id in the action
    $("#new-answer").toggle().attr('action', '/answers/' + questionId);
  });

  $("#new-question").hide();

  //ask a question button
 $(".ask-button").on("click",function(){
     $("#new-question").toggle();
     $(".main").toggle();
 });


})
