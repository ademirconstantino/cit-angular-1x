var app = angular.module("ConstantinoITApp", ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'resources/views/main.html' 
    }).when('/about', { 
      controller: 'AboutController', 
      templateUrl: 'resources/views/main.html' 
    }).otherwise({ 
      redirectTo: '/' 
    }); 
}); 