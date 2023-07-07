const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Database (example, you'll need to configure your own database)
const users = [];

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    users.push(newUser);

    // You can send email verification or mobile OTP here

    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error signing up');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
