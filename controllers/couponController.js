const { validationResult } = require("express-validator/check");
const Coupons = require("../models/coupons");
const Guest = require("../models/guestModel");

exports.addCoupon = async (req, res, next) => {
  const GuestId = req.body.GuestId;
  const couponName = req.body.couponName;
  const discount = req.body.discount;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const result = await Coupons.create({
      Guest_id: GuestId,
      coupon_name: couponName,
      discount: discount,
    });
    res.json({ message: "Coupon added successfully" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getcoupons = async (req, res, next) => {
  const guestId = req.body.guestId;
  try {
    const CouponResult = await Coupons.findAll({
      where: { guest_id: guestId },
    });
    const GuestResult = await Guest.findAll({ where: { guest_id: guestId } });
    res.json({ coupons: CouponResult, guest: GuestResult });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
