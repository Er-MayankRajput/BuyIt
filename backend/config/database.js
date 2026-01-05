const mongoose = require("mongoose");

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI);
    console.log(
      `Database connected successfully with HOST: ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDataBase;
