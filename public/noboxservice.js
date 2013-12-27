/*
angular.module("apiService", ["ngResource"])
.factory("Projects", function ($resource) {
    return $resource(
        "/projects/:Id",
        {Id: "@Id" },
        { "update": {method: "PUT"},
          //  "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}
        }
    );
});

-------------------
this woeked below

angular.module('apiService', ['ngResource'])

  .factory('Projects', function($resource) {
    return $resource('projects.json', {}, {
      index: { method: 'GET', isArray: true},
      create: { method: 'POST' }
    });
  })

  .factory('Project', function($resource){
    return $resource('projects/:project_id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' },
      destroy: { method: 'DELETE' }
    });
  });

*/

'use strict';

var nobox = angular.module('nobox');
nobox.factory('Projects', ['$resource', function($resource) {
    return $resource('/projects/:id', {id: '@id'},
    	{ update: {method:'PUT', params: {id: '@id'}}}
    	);
}]);




/*
app.factory('Comment', ['$resource', function($resource) {
    return $resource('/forums/:forumId/comments/:id', {forumId: '@forumId', id: '@id'});
}]);

*/