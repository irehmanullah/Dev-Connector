const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    // Exit Process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;