var gesApp = angular.module("gesApp", ["ngRoute", "ngMessages"]);

gesApp.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "partials/gestion.html"
  })
  .when("/ueas", {
    templateUrl: "partials/ueas.html"
  })
  .when("/profesores", {
    templateUrl: "partials/profesores.html"
  })
  .otherwise({
    redirectTo: "/"
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
