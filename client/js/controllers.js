//====================== controlador gestion ====================
gesApp.controller("gestionController", function($scope, profesoresFactory, ueasFactory) {
  $scope.profesores = [];

  profesoresFactory.get_profesores(function(data) {
    var profesores = data.profesores;
    var obj;
    for(var i = 0; i < profesores.length; i++) {
      obj = profesores[i].profesor_titulo + " " + profesores[i].profesor_nombre + " " + profesores[i].profesor_apellido_paterno + " " + profesores[i].profesor_apellido_materno + " " + profesores[i].profesor_clave;
      $scope.profesores.push(obj);
    }
  });

  ueasFactory.get_ueas(function(data) {
    $scope.ueas = data.ueas;
  });

  $scope.seleccionar_trimestre = function(trimestre) {
    $scope.trim_selec = []
    for(var i = 0; i < $scope.ueas.length; i++) {
      if($scope.ueas[i].uea_trimestre != undefined) {
        if($scope.ueas[i].uea_trimestre.includes(trimestre))
          $scope.trim_selec.push($scope.ueas[i])
      }
    }
  }

  $scope.descargar_excel = function() {
    var data_type = 'data:application/vnd.ms-excel';
  	var a = document.createElement('a');
  	var data_type = 'data:application/vnd.ms-excel';
  	var table_div = document.getElementById('tabla')
  	var table_html = table_div.outerHTML.replace(/ /g, '%20');
  	a.href = data_type + ', ' + table_html;
  	//setting the file name
  	a.download = 'exported_table.xls';
  	//triggering the function
  	a.click();
  }
});

//====================== controlador profesores ====================
gesApp.controller("profesoresController", function($scope, $location, $timeout, profesoresFactory) {
  $scope.msg_error = false;
  $scope.msg_correcto = false;

  profesoresFactory.get_profesores(function(data) {
    $scope.profesores = data.profesores;
  });

  $scope.agregar_profesor = function(profesor) {
    var profe = {};

    if(!profesor                  ||
       !profesor.nombre           ||
       !profesor.apellido_paterno ||
       !profesor.titulo) {
         $scope.msg_error = "Error: Ingresa el titulo, nombre(s), apellido(s), y clave del profesor.";
         $timeout(function() {
           $scope.msg_error = false;
         }, 3000);
    }
    else {

      if(profesor.apellido_materno) {
        profe.profesor_apellido_materno = profesor.apellido_materno.toUpperCase();
      }

      profe.profesor_nombre = profesor.nombre.toUpperCase();
      profe.profesor_apellido_paterno = profesor.apellido_paterno.toUpperCase();
      profe.profesor_titulo = profesor.titulo.toUpperCase();
      profe.profesor_clave = profesor.clave;

      profesoresFactory.add_profesor(profe, function(data) {
        if(!data.bool) {
          $scope.msg_error = data.msg;
          $timeout(function() {
            $scope.msg_error = false;
          }, 3000);
        }
        else {
          $scope.profesor = {};
          profesoresFactory.get_profesores(function(data) {
            $scope.profesores = data.profesores;
          });
          $scope.msg_correcto = data.msg;
          $timeout(function() {
            $scope.msg_correcto = false;
          }, 3000);
        }
      });
    }
  }

  $scope.eliminar_profesor = function(profesor) {
    profesoresFactory.delete_profesor({id: profesor._id}, function(data) {
      if(data.bool) {
        profesoresFactory.get_profesores(function(data) {
          $scope.profesores = data.profesores;
        });
      }
    });
  }

});

//====================== controlador ueas ====================
gesApp.controller("ueasController", function($scope, $location, $timeout, ueasFactory) {

  ueasFactory.get_ueas(function(data) {
    $scope.ueas = data.ueas;
  });

  $scope.agregar_uea = function(uea) {
    var u = {};

    if(!uea           ||
       !uea.nombre    ||
       !uea.clave     ||
       !uea.creditos  ||
       !uea.seriacion1) {
         $scope.msg_error = "Error: Ingresa nombre, clave, creditos y seriación de la UEA.";
         $timeout(function() {
           $scope.msg_error = false;
         }, 3000);
    }
    else {
      if(uea.trimestre) u.uea_trimestre = uea.trimestre;

      u.uea_nombre = uea.nombre.toUpperCase();
      u.uea_clave = uea.clave;
      u.uea_creditos = uea.creditos;
      u.uea_seriacion = [];
      u.uea_seriacion.push(uea.seriacion1);

      if(uea.seriacion2) u.uea_seriacion.push(uea.seriacion2);

      ueasFactory.add_uea(u, function(data) {
        if(!data.bool) {
          $scope.msg_error = data.msg;
          $timeout(function() {
            $scope.msg_error = false;
          }, 3000);
        }
        else {
          $scope.uea = {};
          ueasFactory.get_ueas(function(data) {
            $scope.ueas = data.ueas;
          });
          $scope.msg_correcto = data.msg;
          $timeout(function() {
            $scope.msg_correcto = false;
          }, 3000);
        }
      });
    }
  }

  $scope.eliminar_uea = function(uea) {
    ueasFactory.delete_uea({id: uea._id}, function(data) {
      if(data.bool) {
        ueasFactory.get_ueas(function(data) {
          $scope.ueas = data.ueas;
        });
      }
    });
  }
});
