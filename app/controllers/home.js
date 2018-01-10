angular.module('MyApp')
    .controller('HomeCtrl', function($scope, $location, $window, $auth) {
        $scope.slider = { //requires angular-bootstrap to display tooltips
            value: 5,
            options: {
                floor: 0,
                ceil: 10,
                showTicks: true,
                ticksTooltip: function(v) {
                    return 'Tooltip for ' + v;
                }
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
