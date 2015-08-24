module.exports = function(sequelize, Sequelize){
  return sequelize.define("answer", {
    content: Sequelize.STRING,
    score: Sequelize.INTEGER
    // comments: Sequelize.STRING
    // user_id: Sequelize.STRING
    // question_id: Sequelize.STRING

  });
}
