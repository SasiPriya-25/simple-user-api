const express = require('express');
const cors = require("cors")
const mongoose = require("./db")
const User = require('./models/User');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 5000;


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
      const { name, email, age } = req.body;
      const newUser = new User({ name, email, age });
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