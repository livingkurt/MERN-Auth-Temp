const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/auth_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
).then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));;
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// const express = require("express");
// const mongoose = require('mongoose')p
// const bodyParser = require('body-parser')
// const PORT = process.env.PORT || 3001;
// const app = express();
// const passport = require("passport");
// const users = require("./routes/api/users");




// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/auth_db",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   }
// ).then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));;

// app.use(bodyParser.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// // app.use(bodyParser.json())
// const db = require("./config/keys").mongoURI;

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
