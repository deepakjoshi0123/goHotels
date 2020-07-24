const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Hotel = sequelize.define("Hotel", {
  Hotel_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  owner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Hotel_img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Hotel_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Hotel;
