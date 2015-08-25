var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///project3");

var User = sequelize.import("../app/models/user");
var Question = sequelize.import("../app/models/question");
var Answer = sequelize.import("../app/models/answer");

User.hasMany(Question);
User.hasMany(Answer);
Answer.belongsTo(Question);
Question.hasMany(Answer);
Answer.belongsTo(User);
Answer.belongsTo(User);


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    User: User,
    Question: Question,
    Answer: Answer
  }
}
