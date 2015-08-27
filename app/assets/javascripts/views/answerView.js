
// 
// var AnswerView = function(answer){
//   this.answer = answer;
//   this.$el = $("<div class='answer'></div>"); //not using
//
// }
//
// AnswerView.prototype = {
//     render: function(){
//       var question_id = this.answer.question_id;
//       var answerElementId = "question_"+question_id+"_answer";
//       var el = $("<p id='"+answerElementId+"' style='display: none;'>" + this.answer.content + "</p>");
//
//
//       var questionElementId = "question_" + question_id;
//       var questionHtml = $('#' + questionElementId);
//       questionHtml.append(el);
//
//       $(questionHtml).on('click', function(event) {
//         var answerHtml = $('#'+answerElementId);
//         answerHtml.toggle(!answerHtml.is(':visible'));
//       });
//
//       return(el)
//     }
}
