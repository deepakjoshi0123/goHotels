const { validationResult } = require("express-validator/check");
const Booking = require("../models/bookings");
const guest = require("../models/guestModel");

exports.addBooking = async (req, res, next) => {
  const guestId = req.body.guestId;
  const hotelId = req.body.hotelId;
  const dateIn = req.body.dateIn;
  const dateOut = req.body.dateOut;
  const bookingStatus = req.body.bookingStatus;
  const roomId = req.body.roomId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new Error("validation fail ");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  try {
    console.log(bookingStatus);
    const result = await Booking.create({
      guest_id: guestId,
      hotel_id: hotelId,
      check_in_date: dateIn,
      check_out_date: dateOut,
      Booking_status: bookingStatus,
      room_id: roomId,
    });
    res.json({ message: "booking successfull" });
  } catch (err) {
    next(err);
  }
};

exports.mybookings = async (req, res, next) => {
  const guestId = req.body.guestId;
  try {
    const BookingResult = await Booking.findAll({
      where: { guest_id: guestId },
    });
    const GuestResult = await guest.findAll({ where: { guest_id: guestId } });
    res.json({ bookings: BookingResult, guest: GuestResult });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.cancelbooking = async (req, res, next) => {
  const bookingId = req.params.bookingId;
  try {
    const Booking = await guest.findByPk(bookingId);
    Booking.Booking_status = cancel;
    Booking.save();
    res.json({ message: "booking canceled" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
