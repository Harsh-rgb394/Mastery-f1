const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const Mongo_connect = require("./config/db");
const post_route = require("./routes/posts");
const user_route=require("./routes/users");

// here we used imort statmenet rather than const because its easy use and handle
// u you can use via "type":"module" in json file
// for db connection
// dotenv.config();

Mongo_connect();
const PORT = process.env.PORT || 5000;

const app = express();

// jo bhi json form ka data usko parse or convert kar deta into js form
app.use(bodyParser.json({ limit: "30mb", extended: true }));
// its used for parse the fomr data
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// now here we use default path for posts
app.use("/posts", post_route);
app.use("/users",user_route);

app.listen(PORT, () => {
  console.log(`server is successfully running on ${PORT}`.bgMagenta);
});
