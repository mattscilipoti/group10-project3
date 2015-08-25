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
    var html = $("<div>");
    html.append

  }
}
