const mongoose = require('mongoose');


require('dotenv').config()

const uri = process.env.MONGO_URI

// Replace <username>, <password>, and `myDatabase` with your values
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("Failed to connect to MongoDB Atlas", err));

module.exports = mongoose