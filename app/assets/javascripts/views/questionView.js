var QuestionView = function(question){
  this.question = question;
  this.$el = $("<div class='question'></div>");
};

QuestionView.prototype = {
  toggleButton: function(answersDiv){
    if(answersDiv.is(":visible")){
      answersDiv.siblings("button").text("Hide Answers");
    } else {
      answersDiv.siblings("button").text("Show Answers");
    }
  },
  toggleAnswers: function(answersDiv){
    var self = this;
    // if not in DOM, populate'
    if(answersDiv.children().length === 0){
      this.question.fetchAnswers().then(function(answers){
        self.appendAnswers(answers, answersDiv);
      });
    }
    // toggle (note: answersDiv starts hidden)
    answersDiv.toggle();
    this.toggleButton(answersDiv);
  },
  appendAnswers: function(answers, answersDiv){
    answers.forEach(function(answer){
      var answerView = new AnswerView(answer);
      answersDiv.append(answerView.render());
    });
  },
  render: function(){
    var self = this;

    self.$el.html(self.questionTemplate(self.question));
    $(".questions").append(self.$el);

    var showButton = self.$el.find(".showAnswers");
    var answersDiv   = self.$el.find("div.answers");

    answersDiv.hide(); // hide div until it's populated with answers

    showButton.on("click", function(){
      self.toggleAnswers(answersDiv);
    });
  },
  questionTemplate: function(question){
    var html = $("<div>");
    html.append("<h3>" + question.name + "</h3>");
    html.append("<img class='question-photo' src='" + question.photoUrl + "'>");
    html.append("<button class='showAnswers'>Show Answers</button>");
    html.append("<div class='answers'></div>");
    return(html);
  }
};
