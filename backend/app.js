const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//config
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "backend/.env" });
}

const port = process.env.PORT || 3001;
//middleware
console.log(port);
console.log(process.env.NODE_ENV);
app.use(express.json());

//routes
// const authRoutes = require('./routes/auth');
// const productRoutes = require('./routes/product');

// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/products', productRoutes);

// if production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../FrontEnd/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "FrontEnd", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("please set NODE_ENV to production");
  });
}

module.exports = app;
