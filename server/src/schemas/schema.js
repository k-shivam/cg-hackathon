const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  number: {
    type: String,
    trim: true,
    required: true,
    minlength: 10,
    unique:true
  },
  email:{
    type: String,
    trim: true,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {},
  },
});

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  status: {
    type: Boolean,
    trim: true,
  },
});

module.exports = {
  userSchema,
  taskSchema,
};
