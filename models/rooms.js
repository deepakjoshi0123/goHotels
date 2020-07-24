const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Rooms = sequelize.define("Rooms", {
  Room_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Hotel_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  Roomtype_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Rooms;
