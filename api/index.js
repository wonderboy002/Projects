//creating an express app

//mongo password c93SxUdY6RN6bKZy
//data base connection string : mongodb+srv://nipunkup:<password>@cluster0.ciipy4b.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const User = require("./models/User");
const jwt = require("jsonwebtoken"); //for authentication
const cors = require("cors"); //for allowing frontend to connect with server
const cookie_parser=require("cookie-parser");

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(cookie_parser());

//creating a database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.get("/", (req, res) => {
  res.json("Server functional!!");
});

const jwt_secret = process.env.JWT_SECRET;

//acquring the userModel

//creating api endpoint for registration ,post request
app.post("/register", async (req, res) => {
  //grab data from request
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
    jwt.sign({ userId: createdUser._id,username }, jwt_secret, {}, (err, token) => {
      if (err) {
        throw err;
      } else {
        res.cookie("token", token,{sameSite : 'none',secure : true}).json({
          id: createdUser._id,
          username,
        });
      }
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      res.status(400).json({
        message: "Username already exists. Please choose a different username.",
      });
    } else {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

//end point for session manangement
app.get("/profile", (req, res) => {
  //grab the token from cookie
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, jwt_secret, {}, (err, result) => {
      if (err) {
        throw err;
      } else {
        const {username } = result;
        res.json({
           result
        });
      }
    });
  }
  else {
    res.json('no token');
  }
});

app.listen(3000);
