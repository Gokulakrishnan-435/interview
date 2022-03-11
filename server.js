const express = require("express");
const { PORT, MONGODB_URL } = require("./config");
const app = express();
const { join } = require("path");
const homeRoute = require("./Route/coder");
const { engine } = require("express-handlebars");

// template engiene middleware starts here
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// template engine middleware ends here

// build in middleware starts here
app.use(express.static(join(__dirname, "/public")));
app.use(express.static(join(__dirname, "node_modules")));
// build in middleware ends here
app.use("/coder", homeRoute);
// Listen

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`successfully application is litening in ${PORT}`);
});
