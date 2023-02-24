let express = require("express");
const app = express(); // instance

module.exports = app.get("/", (request, response) => {
  response.send("Home Page");
});

module.exports = app.get("/about", (request, response) => {
  response.send("About Page");
});
app.listen(3000);
