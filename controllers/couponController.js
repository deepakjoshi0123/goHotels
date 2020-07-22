const { validationResult } = require("express-validator/check");
const user = require("../models/coupons");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
