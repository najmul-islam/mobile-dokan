const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// routes
app.use("/api/mobile", require("./routes/mobileRoutes"));
app.get("/", (req, res) => {
  res.send("Hello world");
});

// err handler
app.use(errorHandler);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
