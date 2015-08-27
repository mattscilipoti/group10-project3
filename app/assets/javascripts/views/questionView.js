

var QuestionView = function(question){
  this.question = question;
  this.$el = $("<div class='question '></div>");
};

QuestionView.prototype = {
  appendAnswers: function(answers, answersDiv){
    answers.forEach(function(answer){
      var answerView = new AnswerView(answer);
      answersDiv.append(answerView.render());
    });
  },
  render: function(){
    var content = this.question.content;
    var html = $(".question-title");
    html.append("<li class='question_link' id='question_"+this.question.id+"' data-question-id='"+this.question.id+"'>" + this.question.title + "</li>");

       $id = eval("$('#question_"+this.question.id+"')");
       $($id).click(function(){
         console.log($r);
         console.log($q);
         var qid = $(this).attr('data-question-id');
         $($q).each(function(i,o){
           debugger;
           if(parseInt(o.id,10) === parseInt(qid,10) ){
             $("#question_"+qid).append(o.content);
             console.log(o.content);
           }
         })
       });
       /*
       $(".question_link").unbind();
       $(".question_link").each(function(i,o){
         $(o).click(function(){
           //$(this).attr('data-question-id');
           console.log(answers);
         })
       });
       */


      }
}
