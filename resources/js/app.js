var app = angular.module("ConstantinoITApp", ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'resources/views/main.html' 
    }).when('/about', { 
      controller: 'MainController', 
      templateUrl: 'resources/views/about.html' 
    }).otherwise({ 
      redirectTo: '/' 
    }); 
}); 