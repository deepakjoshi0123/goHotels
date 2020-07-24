const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Hotel_Admin = sequelize.define("Hotel_Admin", {
  Hotel_admin_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  designation: {
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
});

module.exports = Hotel_Admin;
