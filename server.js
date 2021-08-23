const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config.js");
const fs = require("fs");

const path = __dirname + "/app/views/";

const app = express();

app.use(express.static(path));

const cors_url = "http://localhost:8081";

var corsOptions = {
  origin: cors_url,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
//db.sequelize.sync();
// // drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");

  var sql_string = fs.readFileSync("./scubyt.sql", "utf8");
  db.sequelize.query(sql_string);
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello, This is challenge backend." });
});

require("./app/routes/movies.routes")(app);
require("./app/routes/comments.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
