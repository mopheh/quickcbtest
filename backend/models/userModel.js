//jshint esversion:7

import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  matricId: String,
  score: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);

export default User;
