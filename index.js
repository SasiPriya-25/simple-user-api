const express = require('express');
const cors = require("cors")
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
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});