var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

var mongoDB = "mongodb://localhost/uea_gestion";

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") > 0) require(models_path + "/" + file);
});
