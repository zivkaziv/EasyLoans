angular.module('MyApp')
    .controller('LoansCtrl', function($scope, $q, $timeout) {
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

        var vm = this;
        $scope.vm = vm;
        vm.selectedStep = 0;
        vm.stepProgress = 1;
        vm.maxStep = 3;
        vm.showBusyText = false;
        vm.stepData = [
            { step: 1, completed: true, optional: false, data: {
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
            } },
            { step: 2, completed: false, optional: false, data: {} },
            { step: 3, completed: false, optional: false, data: {} }
        ];

        vm.enableNextStep = function nextStep() {
            //do not exceed into max step
            if (vm.selectedStep >= vm.maxStep) {
                return;
            }
            //do not increment vm.stepProgress when submitting from previously completed step
            if (vm.selectedStep === vm.stepProgress - 1) {
                vm.stepProgress = vm.stepProgress + 1;
            }
            vm.selectedStep = vm.selectedStep + 1;
        };

        vm.moveToPreviousStep = function moveToPreviousStep() {
            if (vm.selectedStep > 0) {
                vm.selectedStep = vm.selectedStep - 1;
            }
        };

        vm.submitCurrentStep = function submitCurrentStep(stepData, isSkip) {
            var deferred = $q.defer();
            vm.showBusyText = true;
            console.log('On before submit');
            if (!stepData.completed && !isSkip) {
                //simulate $http
                $timeout(function () {
                    vm.showBusyText = false;
                    console.log('On submit success');
                    deferred.resolve({ status: 200, statusText: 'success', data: {} });
                    //move to next step when success
                    stepData.completed = true;
                    vm.enableNextStep();
                }, 1000)
            } else {
                vm.showBusyText = false;
                vm.enableNextStep();
            }
        }

    });
