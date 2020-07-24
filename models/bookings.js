const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Booking = sequelize.define("Booking", {
  booking_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  guest_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  check_in_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  check_out_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  hotel_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  room_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Booking_status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Booking.associations = () => {};

module.exports = Booking;
