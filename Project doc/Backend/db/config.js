// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 



const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/BookStore';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`MongoDB connected to ${mongoUri}`))
  .catch((error) => console.error('MongoDB connection error:', error.message));
