const { validationResult } = require("express-validator/check");
const guest = require("../models/guestModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.editProfile = async (req, res, next) => {
  const id = req.body.id;
  const email = req.body.email;
  const gender = req.body.gender;
  const fullName = req.body.fullname;
  const phone = req.body.phone;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new Error("validation fail ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const user = await guest.findByPk(id);
    user.email = email;
    user.gender = gender;
    user.fullName = fullName;
    user.phone = phone;

    user.save();
    console.log("guest profile updated ");
    res.json({ message: "updated guest profile successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  const email = req.body.email;
  const oldpassword = req.body.oldpassword;
  const newpassword = req.body.newpassword;

  try {
    const user = await guest.findOne({ where: { email: email } });
    if (!user) {
      const error = new Error("A user with this email not found");
      error.statusCode = 401;
      throw error;
    }
    try {
      const isEqual = await bcrypt.compare(oldpassword, user.password);
      console.log("NoTworking ");
      if (!isEqual) {
        const error = new Error("wrong password");
        error.statusCode = 401;
        throw error;
      }
      try {
        const hashedPw = await bcrypt.hash(newpassword, 12);
        user.password = hashedPw;
        user.save();
        res.json({ message: "Guest Password updated succesfully" });
      } catch (err) {
        console.log(err);
      }
    } catch (error) {
      console.log("error", error);
      next(error);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
