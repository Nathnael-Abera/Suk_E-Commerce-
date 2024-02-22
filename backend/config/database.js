//create db
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then((data) => {
      console.log(`MongoDB Connected...: ${data.connection.host}`);
    });
  } catch (err) {
    console.error(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
