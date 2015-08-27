$(document).ready(function () {
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


 // 13 = enter key
$(".search").on("keypress", function(event){
  if(event.keyCode == 13){
    var searching = []

    alert("enter pressed")
  }
});

  //
  // console.log("ayy its ready");
  //
  // function Answer(params) {
  //   if(params) this.data = params;
  //   this.render();
  // }
  //
  // Answer.prototype = {
  //   render: function () {
  //     this.view = "<li class='answer'><input type='hidden' name='id' value='" + (this.data.id || "") + "' /><input type='hidden' name='questionId' value='" + this.data.questionId + "' /><textarea name='content'>" + (this.data.content || "") + "</textarea>";
  //       if(!this.data.id){
  //         this.view += "<button type='button' class='create'>Create</button>";
  //       }else{
  //         this.view += "<button type='button' class='save'>Save</button><button type='button' class='delete'>Delete</button>";
  //       }
  //       this.view += "</li>";
  //   }
  // }
  //
  // function Question(params, answersHtml) {
  //   if(params){
  //     this.data = params;
  //     this.answersHtml = answersHtml;
  //     this.render();
  //   }
  // }
  //
  // Question.prototype = {
  //   render: function(){
  //     this.view = "<div class='question'><input type='hidden' name='id' value='" + (this.data.id || "") + "' /><input type='text' name='title' value='" + (this.data.title || "") + "' />";
  //     if(!this.data.id){
  //       this.view += "<button type='button' class='create'>Create</button>";
  //     }else{
  //       this.view += "<button type='button' class='save'>Save</button><button type='button' class='delete'>Delete</button>";
  //       this.view += "<ul>" + this.answersHtml + "</ul>";
  //     }
  //     this.view += "</div>";
  //   }
  // }
  //
  // var questions;
  // var answers;
  // $.ajax({
  //   url: "/questions",
  //   method: "get"
  // }).then(function(response){
  //   questions = response;
  //   questions.push({title: ""});
  //   return $.ajax({
  //     url: "/answers",
  //     method: "get"
  //   })
  // }).then(function(response){
  //   var answersHtml, answer, question;
  //   var questionsHtml = "";
  //   answers = response;
  //   for(var l = 0; l < questions.length; l++){
  //     question = questions[l];
  //     answersHtml = "";
  //     answers.push({questionId: question.id, content: ""});
  //     for(var t = 0; t < answers.length; t++){
  //       if(question.id == 0) break;
  //       answer = answers[t];
  //       if(answer.questionId != question.id) continue;
  //       answersHtml += new Task(answer).view;
  //     }
  //     questionsHtml += new List(question, answersHtml).view;
  //   }
  //   $("main").html(questionsHtml);
  //
  //
  //
  // })

})
