var UserView = function(user){
  this.user = user;
  this.$el = $("<div class='user'></div>");
};

UserView.prototype = {
  appendQuestions: function(questions, answersDiv){
    questions.forEach(function(question){
      var questionView = new QuestionView(question);
      questionsDiv.append(questionView.render());
    });
  },
  render: function(){
    var html = $(".user");
    html.append(this.user.title)

  }
}
