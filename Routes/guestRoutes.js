const express = require("express");
//const { body } = require("express-validator");
const userCtrl = require("../controllers/guestAuthControllers");
const couponCtrl = require("../controllers/couponController");

const profileCtrl = require("../controllers/guestProfile");

const router = express.Router();

router.post("/customer/signup", userCtrl.signup);
router.post("/customer/login", userCtrl.login);
// router.get("/customer/logout", userCtrl.logout);   will work on it after discus
router.post("/customer/editProfile", profileCtrl.editProfile);
router.post("/customer/changePassword", profileCtrl.changePassword);

//router.get("/customer/getcoupons", userCtrl.getcoupons);
// router.get("/customer/mybookings", userCtrl.mybookings);
// router.get("/customer/cancelBooking", userCtrl.cancelbooking);

module.exports = router;
