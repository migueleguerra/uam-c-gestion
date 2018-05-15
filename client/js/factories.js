gesApp.factory("profesoresFactory", function($http) {
  var factory = {};

  factory.add_profesor = function(data, callback) {
    $http.post("/crear_profesor", data).then(function(data) {
      callback(data.data);
    });
  }

  factory.get_profesores = function(callback) {
    $http.post("/profesores").then(function(data) {
      callback(data.data);
    });
  }

  factory.delete_profesor = function(data, callback) {
    $http.post("/eliminar_profesor", data).then(function(data) {
      callback(data.data);
    });
  }

  return factory;
});

gesApp.factory("ueasFactory", function($http) {
  var factory = {};

  factory.add_uea = function(data, callback) {
    $http.post("/crear_uea", data).then(function(data) {
      callback(data.data);
    });
  }

  factory.get_ueas = function(callback) {
    $http.post("/ueas").then(function(data) {
      callback(data.data);
    });
  }

  factory.delete_uea = function(data, callback) {
    $http.post("/eliminar_uea", data).then(function(data) {
      callback(data.data);
    });
  }

  return factory;
});
