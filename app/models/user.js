module.exports = function(sequelize, Sequelize){
  return sequelize.define("user", {
    username: Sequelize.STRING,
    fullname: Sequelize.STRING,
    email: Sequelize.STRING,
    position: Sequelize.STRING
  });
}
