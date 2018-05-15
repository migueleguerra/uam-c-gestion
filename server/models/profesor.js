var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProfesorSchema = new Schema({
  profesor_nombre: {
    type: String,
    require: true
  },
  profesor_apellido_paterno: {
    type: String,
    require: true
  },
  profesor_apellido_materno: {
    type: String
  },
  profesor_titulo: {
    type: String,
    require: true
  },
  profesor_clave: {
    type: Number,
    unique: true,
    require: true
  }
}, {timestamps: true});

mongoose.model("Profesor", ProfesorSchema);
