// // controllers/authController.js
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// // Register a new user
// exports.register = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // User login
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.status(200).json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { username, email, password } = req.body; // Added email to request body
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user with email
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// User login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

