angular.module('MyApp')
    .factory('Loan', function($http) {
        return {
            create: function(data) {
                return $http.post('/loan', data);
            }
        };
    });