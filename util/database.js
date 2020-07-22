const Sequelize = require("sequelize");

const sequelize = new Sequelize("goibibo", "admin", "password", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;
