angular.module('MyApp')
    .controller('LoansCtrl', function($scope, $location, $window, $auth) {
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
    });
