const app = require("./app");

//Importing database connection file
const connectDataBase = require("./config/database");

const dotenv = require("dotenv");

//Setting up config file
dotenv.config({ path: "backend/config/config.env" });

//Connecting to database
connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
