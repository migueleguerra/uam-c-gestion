var express = require("express");
var path = require("path");
var body_parser = require("body-parser");
var app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(__dirname + '/client'));

require("./server/config/mongoose.js");

app.get("/*", function(req, res, next) {
  res.sendFile(__dirname + "/client/index.html");
});

var routes = require("./server/config/routes.js");
routes(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
});
