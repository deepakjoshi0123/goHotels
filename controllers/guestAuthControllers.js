const { validationResult } = require("express-validator/check");
const guest = require("../models/guestModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  const fullName = req.body.fullname;
  const phone = req.body.phone;
  let hashPass;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const hashedPw = await bcrypt.hash(password, 12);
    hashPass = hashedPw;
  } catch (err) {
    console.log(err);
  }
  try {
    const result = await guest.create({
      email: email,
      password: hashPass,
      gender: gender,
      fullname: fullName,
      phone: phone,
    });
    res.json({ message: "guest added successfully" });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  try {
    const user = await guest.findOne({ where: { email: email } });
    console.log("login", user.password);
    if (!user) {
      const error = new Error("A user with this email not found");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;
    try {
      const isEqual = await bcrypt.compare(password, user.password);

      if (!isEqual) {
        const error = new Error("wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser.id.toString(),
        },
        "hellow_WorldThere",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token: token, userId: loadedUser.id.toString() });
    } catch (error) {
      console.log("error", error);
      next(err);
    }
  } catch (error) {
    console.log("error", error);
    next(err);
  }
};
