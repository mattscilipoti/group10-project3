var AnswerView = function(answer){
  this.answer = answer;
}

AnswerView.prototype = {
  render: function(){
    var el = $("<p>" + this.answer.title + "</p>");
    return(el)
  }
}

//
