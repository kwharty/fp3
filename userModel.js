var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  userName: {
    type: String,
    trim: true,
    // 
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  userPwd: {
    type: String,
    trim: true,
    // required: "Password is Required",
    // validate: [
    //   function(input) {
    //     return input.length >= 6;
    //   },
    //   "Password should be longer."
    // ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  userEmail: {
    type: String,
    unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns0: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns1: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns2: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns3: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns4: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userAns5: {
    type: Number,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("user", UserSchema);

// Export the User model
module.exports=User;
