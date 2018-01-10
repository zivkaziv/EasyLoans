angular.module('MyApp')
    .controller('HomeCtrl', function($scope, $location, $window, $auth) {
        $scope.slider = {
            value: 40,
            options: {
                showTicksValues: true,
                stepsArray: [
                    // {value: '20', legend: '20€'},
                    {value: '20'},
                    {value: '40'},
                    {value: '50'},
                    {value: '70'},
                    {value: '100'}
                    // {value: 4},
                ]
            }
        };


        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.logout = function() {
            $auth.logout();
            delete $window.localStorage.user;
            $location.path('/');
        };
    });
