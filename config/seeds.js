var DB = require("../config/connection")

var Question = DB.models.Question
// var Answer = DB.models.Answer

var questions = [
  {title:"How do I create user authentication on my Express app?", content:"My group is building an Express app for WDI and related GA classes with user-submitted questions and answers. We want to implement user authentication, ideally tied to Github login info. What are our options?"},
  {title:"Express vs. Sinatra", content:"Can someone explain the difference between Express and Sinatra to develop simple single-page apps? How do I choose one vs. the other?"},
  {title:"Relative and Absolute positioning", content:"I'm trying to nest a box within a box, but am having some trouble. How would I position it?"},
  {title:"Pseudoclasses", content:"Why would I ever need them?"},
  {title:"Analogy for MVC framework?", content:"Does anyone have a good metaphor that explains where each piece of the MVC framework fits in?"},
  {title:"Handlebars in Node", content:"I'm setting up an Express app. When do handlebars help me? Is it only if I'm building an app with multiple pages?"},
  {title:"rolling back mistakes in Github", content:"Can I use the command <em>git revert</em> to undo my changes? How would I find the right point to go to?"}
]

// var answers = [
//   {content:"Check out <a href='http://passportjs.org/'>Passport.js</a>. Or go to Jesse's lesson on authentication Tuesday afternoon.", question_id: 1}
// ]

Question.bulkCreate(questions)
// .then(function(){
//   return Answer.bulkCreate(answers)
// })
.then(function(){
  console.log("Seeded successfully! kthxbye");
  process.exit();
});
