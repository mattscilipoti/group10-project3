var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///project3");

var Question = sequelize.import("../app/models/question");
var Answer = sequelize.import("../app/models/answer");

Answer.belongsTo(Question);
Question.hasMany(Answer);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
    Question: Question,
    Answer: Answer
  }
}
