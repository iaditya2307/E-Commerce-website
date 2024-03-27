const { string } = require("joi");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// schema me username aur password ki zarurat nahi hai kyuki passportlocalMongoose apne aap hi
// username aur password apne aaap hi DataBase me add kardega
const userSchema = new mongoose.Schema({
  email:{
    type:String,
    trim:true,
    required:true
  }
});


// model se pehle schema ke baad

userSchema.plugin(passportLocalMongoose);


let Review = mongoose.model("User", userSchema);

module.exports = Review;
