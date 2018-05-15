var mongoose = require("mongoose");
var Profesor = mongoose.model("Profesor");

module.exports = (function(){
  return {

    profesores: function(req, res) {
      Profesor.find({}, function(error, profesores) {
        if(error) return res.json({bool: false, msg: "Error, intente mas tarde."});
        else res.json({bool: true, profesores: profesores});
      });
    },

    crear_profesor: function(req, res) {
      if(!req.body.profesor_nombre ||
         !req.body.profesor_apellido_paterno ||
         !req.body.profesor_titulo ||
         !req.body.profesor_clave) {
        res.json({bool: false, msg: "Error: Ingresa el titulo, nombre(s), apellido(s), y clave del profesor."});
      }
      else {
        var newProfesor = new Profesor({
          profesor_nombre: req.body.profesor_nombre,
          profesor_apellido_paterno: req.body.profesor_apellido_paterno,
          profesor_apellido_materno: req.body.profesor_apellido_materno,
          profesor_titulo: req.body.profesor_titulo,
          profesor_clave: req.body.profesor_clave
        });

        newProfesor.save(function(error) {
          if(error) {
            if(error.code === 11000) {
              return res.json({bool: false, msg: "La clave del profesor ya existe."});
            }
            return res.json({bool: false, msg: "Error, intente mas tarde."});
          }
          else {
            res.json({bool: true, msg: "El profesor se creo correctamente."});
          }
        });
      }
    },

    eliminar_profesor: function(req, res) {
      if(!req.body.id) res.json({bool: false, msg: "Ingresa id del profesor."});
      else {
        Profesor.remove({_id: req.body.id}, function(error) {
          if(error) {
            return res.json({bool: false, msg: "Error, intente mas tarde."});
          }
          else {
            res.json({bool: true, msg: "El profesor se elimino correctamente."});
          }
        });
      }
    }
  }
})();
