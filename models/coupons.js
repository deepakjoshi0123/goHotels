const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Coupons = sequelize.define("Coupons", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Guest_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  coupon_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Coupons;
