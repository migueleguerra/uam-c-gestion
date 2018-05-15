var mongoose = require("mongoose");
var uea = mongoose.model("UEA");

module.exports = (function() {
  return {

    ueas: function(req, res) {
      uea.find({}, function(error, ueas) {
        if(error) return res.json({bool: false, msg: "Error, intente mas tarde."});
        else res.json({bool: true, ueas: ueas});
      });
    },

    crear_uea: function(req, res) {
      if(!req.body.uea_nombre    ||
         !req.body.uea_clave     ||
         !req.body.uea_creditos  ||
         !req.body.uea_seriacion) {
        res.json({bool: false, msg: "Error: Ingresa nombre, clave, creditos y seriación de la UEA."});
      }
      else {
        var newUEA = new uea({
          uea_nombre: req.body.uea_nombre,
          uea_clave: req.body.uea_clave,
          uea_grupo: req.body.uea_grupo,
          uea_creditos: req.body.uea_creditos,
          uea_trimestre: req.body.uea_trimestre
        });

        for(var i = 0; i < req.body.uea_seriacion.length; i++) {
          newUEA.uea_seriacion.push(req.body.uea_seriacion[i]);
        }

        newUEA.save(function(error) {
          if(error) {
            if(error.code === 11000){
              return res.json({bool: false, msg: "La clave de la UEA ya existe."});
            }
            return res.json({bool: false, msg: "Error, intente mas tarde."});
          }
          else {
            res.json({bool: true, msg: "La UEA se creo correctamente."});
          }
        });
      }
    },

    eliminar_uea: function(req, res) {
      if(!req.body.id) res.json({bool: false, msg: "Ingresa id de la UEA"});
      else {
        uea.remove({_id: req.body.id}, function(error) {
          if(error) return res.json({bool: false, msg: "Error, intente mas tarde."});
          else res.json({bool: true, msg: "La UEA se elimino correctamente."});
        });
      }
    }

  }
})();
