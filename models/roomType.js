const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const RoomType = sequelize.define("RoomType", {
  Roomtype_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  Hotel_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Room_Type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = RoomType;
