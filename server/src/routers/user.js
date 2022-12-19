const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');

router.get("/users", async (req, res) => {
  try {
    let data = await User.find({},{name:1, email:1, number:1});
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    let data = await User.findById(req.params.id,{
      "name":1, "email":1, "number":1
    });
    if (data) return res.send(data);
    res.status(404).send("not found");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) return res.status(404).send("not found");
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id, {});
    if (!data) return res.status(404).send("not found");
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/signup", async (req, res) => {
  let {password} = req.body || {};
  password = jwt.sign(password, process.env.secret_key);
  req.body['password'] = password; 
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/signin", async (req, res) => {
  let {password, email} = req.body || {};
  console.log(password, email)
  password = jwt.sign(password, process.env.secret_key);
  try {
    const user = await User.findOne({email, password})
    if (user){
      return res.status(200).send({name:user.name, email:user.email, number:user.number})
    }
    return res.status(401).send('Incorrect email/password')
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
