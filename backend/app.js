const express = require("express");
const cors = require("cors");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const fileUpload = require("express-fileupload");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/mobiles", require("./routes/mobileRoute"));
app.use("/api/brands", require("./routes/brandRoute"));

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
