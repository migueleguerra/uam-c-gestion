var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ueaSchema = new Schema({
  uea_nombre: {
    type: String,
    require: true
  },
  uea_clave: {
    type: Number,
    unique: true,
    require: true
  },
  uea_grupo: {
    type: String
  },
  uea_cupo_max: {
    type: Number,
    default: 28
  },
  uea_creditos: {
    type: Number,
    require: true
  },
  uea_seriacion: [{
    type: String,
    require: true
  }],
  uea_trimestre: {
    type: String
  }
}, {timestamps: true});

mongoose.model("UEA", ueaSchema);
