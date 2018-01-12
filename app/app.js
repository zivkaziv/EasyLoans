angular.module('MyApp', [
    'ngRoute',
    'satellizer',
    'rzModule',
    'ngMaterial',
    'md-steppers'])

    .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/how/borrow', {
        templateUrl: 'partials/borrow.html'
      })
      .when('/how/pay', {
         templateUrl: 'partials/pay.html'
      })
      .when('/request', {
          templateUrl: 'partials/request.html',
          controller: 'LoansCtrl',
          resolve: { loginRequired: loginRequired }
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/account', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        resolve: { loginRequired: loginRequired }
      })
      .when('/forgot', {
        templateUrl: 'partials/forgot.html',
        controller: 'ForgotCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })
      .when('/reset/:token', {
        templateUrl: 'partials/reset.html',
        controller: 'ResetCtrl',
        resolve: { skipIfAuthenticated: skipIfAuthenticated }
      })

      .when('/loans', {
         templateUrl: 'partials/loans.html',
         controller: 'LoansCtrl',
         resolve: { loginRequired: loginRequired }
      })

      .when('/terms', {
          templateUrl: 'partials/terms.html'
      })
      .when('/faq', {
          templateUrl: 'partials/faq.html'
      })
      .when('/about', {
          templateUrl: 'partials/about.html'
      })

      .otherwise({
        templateUrl: 'partials/404.html'
      });

    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/signup';
    $authProvider.facebook({
      url: '/auth/facebook',
      clientId: '122165175143941',
      redirectUri: 'http://localhost:3000/auth/facebook/callback'
    });

    function skipIfAuthenticated($location, $auth) {
      if ($auth.isAuthenticated()) {
        $location.path('/');
      }
    }

    function loginRequired($location, $auth) {
      if (!$auth.isAuthenticated()) {
        $location.path('/login');
      }
    }
  })
  .run(function($rootScope, $window) {
    if ($window.localStorage.user) {
      $rootScope.currentUser = JSON.parse($window.localStorage.user);
    }
  });
