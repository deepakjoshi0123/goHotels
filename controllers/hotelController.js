const { validationResult } = require("express-validator/check");
const hotel = require("../models/hotel");
const hotelAdmin = require("../models/hotelAdmin");
const room = require("../models/rooms");
const roomType = require("../models/roomType");

exports.hotelOwnerSignUp = async (req, res, next) => {
  const designation = req.body.designation;
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
    const result = await hotelAdmin.create({
      designation: designation,
      email: email,
      password: hashPass,
      gender: gender,
      fullname: fullName,
      phone: phone,
    });
    res.json({ message: "owner added successfully", ownerId: owner_id });
  } catch (err) {
    console.log(err);
  }
};
exports.addHotel = async (req, res, next) => {
  const ownerId = req.body.ownerId;
  const HotelName = req.body.HotelName;
  const address = req.body.address;
  const city = req.body.city;
  const HotelImg = req.body.HotelImg;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const result = await hotel.create({
      owner_id: ownerId,
      Hotel_name: HotelName,
      address: address,
      city: city,
      Hotel_img: HotelImg,
    });
    res.json({ message: "Hotel added successfully" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.addRoom = async (req, res, next) => {
  const HotelId = req.body.HotelId;
  const roomtypeId = req.body.roomtypeId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  try {
    const result = await room.create({
      Hotel_id: HotelId,
      Roomtype_id: roomtypeId,
    });
    res.json({ message: "room added successfully to your hotel" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.EditHotel = async (req, res, next) => {
  const HotelId = req.body.HotelId;
  const HotelImg = req.body.HotelImg;
  const address = req.body.address;
  const HotelName = req.body.HotelName;
  const city = req.body.city;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new Error("validation fail ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  try {
    const resHotel = await hotel.findByPk(HotelId);
    resHotel.Hotel_name = HotelName;
    resHotel.address = address;
    resHotel.city = city;
    resHotel.Hotel_img = HotelImg;

    resHotel.save();
    console.log("your Hotel updated ");
    res.json({ message: "your Hotel updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.EditRoom = async (req, res, next) => {
  const roomId = req.body.roomId;
  const roomType = req.body.roomType;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new Error("validation fail ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  try {
    const resHotel = await room.findByPk(roomId);
    resHotel.roomType = roomType;

    resHotel.save();

    console.log("your room updated ");
    res.json({ message: "your room updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
