const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const products = require("./routes/api/products");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
//const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect('mongodb://localhost:27017', {dbName : "mernAuth"} )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
//app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server up and running on port " + port +" !"));
