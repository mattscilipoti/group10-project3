

var QuestionView = function(question){
  this.question = question;
  this.$el = $("<div class='question '></div>");
};

QuestionView.prototype = {
  appendAnswers: function(answers, answersDiv){

    this.answers = answers;

    answers.forEach(function(answer){
      var answerView = new AnswerView(answer);
      answersDiv.append(answerView.render());
    });
  },

  render: function(){
    var content = this.question.content;
    var questionsDiv = $(".question-title");
    var qtitle = '<div id="qtitle' + this.question.id +'">' + this.question.title +'</div>';
    var qid = this.question.id;
    questionsDiv.append(qtitle);

    var qcontent = '<div id="qcontent"'+ qid + ' class="qcontent" style="display: none; font-solid: 13px; font-weight: normal">' + this.question.content + '</div>';
    $('#qtitle' + this.question.id).append(qcontent);
    var qans = '<div class="qans" style="display: none; font-solid: 13px; font-weight: normal"></div>'

    var contentdiv = $('#qtitle' + this.question.id).find('.qcontent')[0];
    var request = $.getJSON("http://localhost:3000/answers")
    .then(function(response) {
      myAnswers = response;
      console.log(myAnswers[qid]);
      var ansdiv = $(contentdiv).find('.qans')[0];
      console.log(ansdiv);
      if(ansdiv === undefined || ansdiv === null){
        $(contentdiv).append('<br/>Ans: ' + myAnswers[qid].content);
        // $(contentdiv).append( html for form ) //add form 
      }
    });


    $('#qtitle' + this.question.id).click(function(){
      var contentdiv = $(this).find('.qcontent')[0];
      $(contentdiv).toggle();

    })




    // var html = $(".question-title");
    // html.append("<li class='question_link' id='question_"+this.question.id+"' data-question-id='"+this.question.id+"'>" + this.question.title + "</li>");
    //
    //    $id = eval("$('#question_"+this.question.id+"')");
    //    $($id).click(function(){
    //      console.log($r);
    //      console.log($q);
    //      var qid = $(this).attr('data-question-id');
    //      $($q).each(function(i,o){
    //        debugger;
    //        if(parseInt(o.id,10) === parseInt(qid,10) ){
    //          $("#question_"+qid).append(o.content);
    //          console.log(o.content);
    //        }
    //      })
    //    });
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
