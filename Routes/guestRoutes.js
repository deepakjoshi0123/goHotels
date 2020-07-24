const express = require("express");
const { body } = require("express-validator");
const userCtrl = require("../controllers/guestAuthControllers");
const couponCtrl = require("../controllers/couponController");
const profileCtrl = require("../controllers/guestProfile");

const BookingCtrl = require("../controllers/bookingController");
const HotelCtrl = require("../controllers/hotelController");

const router = express.Router();

router.post("/customer/signup", userCtrl.signup);
router.post("/customer/login", userCtrl.login);

router.post("/customer/editProfile", profileCtrl.editProfile);
router.post("/customer/changePassword", profileCtrl.changePassword);

router.post("/customer/addBooking", BookingCtrl.addBooking);
router.get("/customer/myBooking", BookingCtrl.mybookings);
router.get("/customer/cancelBooking", BookingCtrl.cancelbooking);

router.get("/customer/addCoupon", couponCtrl.addCoupon);
router.get("/customer/getcoupons", couponCtrl.getcoupons);

// today's api's
router.post("/Hotel/signupHotelOwner", HotelCtrl.hotelOwnerSignUp);
router.post("/Hotel/addHotel", HotelCtrl.addHotel);
router.post("/Hotel/editHotel", HotelCtrl.EditHotel);
router.post("/Hotel/addRoom", HotelCtrl.addRoom);
router.post("/Hotel/editRoom", HotelCtrl.EditRoom);

module.exports = router;
