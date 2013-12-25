//= require jquery
//= require angular
//= require ui-bootstrap-tpls-0.2.0 

angular.module('project', ['ngRoute', 'firebase'])
 
.value('fbURL', 'https://angularjs-projects.firebaseio.com/')
 
.factory('Projects', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
})
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'index.html'
    })
    .when('/edit/:projectId', {
      controller:'EditCtrl',
      templateUrl:'edit.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'edit.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('ListCtrl', ['$scope', 'Projects', function($scope, Projects) {
  $scope.projects = Projects;
}])
 



