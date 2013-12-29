var App = angular.module('nobox', ['ngRoute', 'ngResource', 'xeditable'])

  .config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])  

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ProjectController',
      templateUrl:'dashboard.html'
    })
    .when('/projects/new', {
      controller:'ProjectController',
      templateUrl:'projectSummary.html'
    })
    .when('/projects/:Id', {
      controller:'ProjectController',
      templateUrl:'projectSummary.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});

App.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

App.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});







