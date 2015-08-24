var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///do_something");


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  models: {
  }
}
