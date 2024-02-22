const app = require("./app.js");
const dotenv = require("dotenv");

//handeling uncought exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err}`);
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
});
port = process.env.PORT || 3001;
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

//handeling unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err}`);
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  process.exit(1);
});
