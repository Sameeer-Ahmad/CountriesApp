const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");
const { tokenModel } = require("../model/token.model");

const userRouter = express.Router();
require("dotenv").config();

const app=express()


userRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const saltRound = 10;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "Email already registered" });
    }
    
  
    bcrypt.hash(password, saltRound, async (err, hash) => {
      if (err) {
        res.status(200).send({ msg: err });
      } else {
        const user = new userModel({ username, email, password: hash });

        await user.save();
        res.status(200).send({ message: "User registered successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(401).send("Something is wrong");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userID: user._id, username: user.username,  },
            process.env.SECRET_KEY
          );
          res.status(200).send({ msg: "login successfully", token });
        } else {
          res.status(200).send({ msg: "wrong credential" });
        }
      });
    } else {
      res.status(200).send("User not found");
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("user not found");
  }
});

userRouter.post("/logout", async (req, res) =>{
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).send({ msg: "Authorization header not provided" });
  }
  const token = header.split(" ")[1];
  try {
    if (!token) {
      res.status(401).send({ msg: "No token provided" });
    }
    const userToken = new tokenModel( { token } );
    await userToken.save();
    return res.status(200).send({ msg: "logged out successfully" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
  console.log(token);
});

module.exports = {
  userRouter,
};
