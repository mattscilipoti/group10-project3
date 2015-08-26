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
},

render AskQuestion = (){
  var htmlQuestion =("#question_form");
  var questionForm =
  htmlQuestion.append()
},
}

    <form method="post" action="/">
      <h3><input type="text" name="title" placeholder="Title of Question"></h3>
      <p><textarea name="content"></textarea></p>
      <button type="submit">Submit</button>
    </form>





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
