angular.module('MyApp')
    .factory('Loan', function($http) {
        return {
            loan:{
                value:'40'
            },

            resetLoan:function(){
              this.loan.value ='40'
            },

            create: function(data) {
                return $http.post('/loan', data);
            }
        };
    });