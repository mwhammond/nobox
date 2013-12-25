angular.module('nobox', ['ngRoute', 'ngResource', 'xeditable'])

  .config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])  

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/projects/edit/:id', {
      controller:'EditCtrl',
      templateUrl:'newproject.html'
    })
    .when('/projects/new', {
      controller:'CreateCtrl',
      templateUrl:'newproject.html'
    })
    .when('/projects/:id', {
      controller:'ShowCtrl',
      templateUrl:'projectSummary.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});

nobox.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});





