const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Guest = sequelize.define("Guest", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Guest;
