angular.module('MyApp')
    .controller('HomeCtrl', function($scope,Loan, $location, $window, $auth) {
        $scope.loan = Loan.loan;

        $scope.slider = {
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
