const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname } = req.body.fullname;
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);

    // Create the user
    const user = await userService.createUser({
      firstname,
      lastname,
      email,
      password:hashedPassword,
    });

    // Generate auth token for the user
    const token = user.generateAuthToken();

    // Send back the user and token
    res.status(201).json({ token, user });
  } catch (error) {
    console.error(error);
    // Pass the error to the next middleware (error handling middleware)
    next(error);
  }
};
