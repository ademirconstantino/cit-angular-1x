app.factory('page', ['$http', function($http) {
  return $http.jsonp('http://www.constantinoit.com/cit.en.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);