const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  console.log("firstname:", firstname, "lastname:", lastname, "email:", email);

  // Check if required fields are present
  if (!firstname || !lastname || !email || !password) {
    throw new Error(
      "All fields (firstname, lastname, email, password) are required."
    );
  }

  // Check if the email is already in use
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }
  // Create the new user with hashed password
  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password, // Save hashed password, not the plain one
  });

  return user;
};
