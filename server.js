var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var PORT = process.env.PORT || 3001;

// Requiring the `User` model for accessing the `users` collection
var User = require("./userModel");


const apiRouter = express.Router()

apiRouter
  .post("/users",(req,res,next)=>{
    console.log(req.body)
    return User.findOne(req.body,(err,foundUser)=>{
      if(err) return res.sendStatus(400);
      if(foundUser){
        return res.status(400).json({message:"email exists already"})
      }
      return User.create(req.body,(err,user)=>{
        // if(err) return send error message
        if(err) return next(err)
        return res.status(201).json(user)
      })
    })
  })
  .post("/user-login",(req,res,next)=>{
    console.log(req.body)
    return User.findOne(req.body,(err,foundUser)=>{
      if(err) return res.sendStatus(400);
      if(!foundUser){
        return res.status(401).json({message: "no user found"})
      }
      if(foundUser){
        if(foundUser.password === req.body.password){
          return res.status(200).json(foundUser)
        }else {
          return res.sendStatus(401)
        }
      }
    })
  })

  // Initialize Express
var app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) return res.send(200);
  else return next()
})
// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


const getdatabaseurl = () => {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI
  } else {
    return "mongodb://localhost:27017/bonguserDB"
  }
}
//HEROKU BUILD LANGUAGE
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect to the Mongo DB
mongoose.connect(getdatabaseurl()), ({ useNewUrlParser: true });

// Routes
app.use("/api", apiRouter)

//route to find user in 
app.get("/user", function (req, res) {
  User.findOne({userName : req.userName})
  .then(function (dbUser) {
    res.json(dbUser);
  })
  .catch(function (err) {
    res.json
  });
})

// Route to post our form submission to mongoDB via mongoose
app.post("/user", function (req, res) {
  // Create a new user using req.body
  User.create(req.body)
    .then(function (dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
