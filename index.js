const express = require('express');
const cors = require("cors")
const mongoose = require("./db")
const User = require('./models/User');
require('dotenv').config()

const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;

// Dummy data
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Route to get the list of users
// Get all users
app.get('/get-users', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users
      console.log(users)
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

app.post('/add-user', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } catch (err) {
      res.status(500).send(err);
    }
  });



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});