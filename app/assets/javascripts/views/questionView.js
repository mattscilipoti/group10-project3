var QuestionView = function(question){
  this.question = question;
  this.$el = $("<div class='question'></div>");
};

QuestionView.prototype = {
  appendAnswers: function(answers, answersDiv){
    answers.forEach(function(answer){
      var answerView = new AnswerView(answer);
      answersDiv.append(answerView.render());
    });
  },
  render: function(){
    var html = $(".question");
    html.append("<li class='question_link' id='question_"+this.question.id+"'>" + this.question.title + "</li>");
    // html.on('click', function(event) {
    //
    // });

    /*
     Best approach: Not put the HTML directly on the
     Javascript code, and find out the way of
      RENDER THE HANDLEBARS LAYOUT FROM HERE.
    */
  }
}
