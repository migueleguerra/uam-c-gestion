var ueas = require("./../controllers/ueas.js");
var profesores = require("./../controllers/profesores.js");

module.exports = function(app) {

  //====================== rutas ueas ====================

  app.post("/ueas", function(req, res) {
    ueas.ueas(req,res);
  });

  /*
    uea_nombre (require)(String)
    uea_clave (require)(unique)(Number)
    uea_grupo (String)
    uea_creditos (require)(Number)
    uea_seriacion (require)(String)
    uea_trimestre (String)
  */
  app.post("/crear_uea", function(req, res) {
    ueas.crear_uea(req, res);
  });

  /*
    id (require)(id UEA)
  */
  app.post("/eliminar_uea", function(req, res) {
    ueas.eliminar_uea(req, res);
  });

  //====================== rutas profesor ====================

  app.post("/profesores", function(req, res) {
    profesores.profesores(req, res);
  });

  /*
    profesor_nombre (require)(String)
    profesor_apellido_paterno (require)(String)
    profesor_apellido_materno (String)
    profesor_titulo (require)(String)
    profesor_clave (require)(unique)(Number)
  */
  app.post("/crear_profesor", function(req, res) {
    profesores.crear_profesor(req, res);
  });

  /*
    id (require)(id profesor)
  */
  app.post("/eliminar_profesor", function(req, res) {
    profesores.eliminar_profesor(req, res);
  });

}
