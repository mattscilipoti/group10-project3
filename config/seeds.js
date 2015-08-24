var DB = require("../config/connection")

var Question = DB.models.Question
var Answer = DB.models.Answer

var questions = [
  {title:"How do I create user authentication on my Express app?", content:"My group is building an Express app for WDI and related GA classes with user-submitted questions and answers. We want to implement user authentication, ideally tied to Github login info. What are our options?"},
  {title:"Express vs. Sinatra", content:"Can someone explain the difference between Express and Sinatra to develop simple single-page apps? How do I choose one vs. the other?"}
  {title:""}
]

var answers = [
  {content:"Check out <a href='http://passportjs.org/'>Passport.js</a>. Or go to Jesse's lesson on authentication Tuesday afternoon.", question_id: 1}
]

Question.bulkCreate(questions).then(function(){
  return Answer.bulkCreate(answers)
})
.then(function(){
  console.log("Seeded successfully! kthxbye");
  process.exit();
});
