angular.module('projectService', ['ngResource'])
  .factory('Projects', function($resource) {
    return $resource('project.json', {}, {
      index: { method: 'GET', isArray: true},
      create: { method: 'POST' }
    });
  })
  .factory('Project', function($resource){
    return $resource('project/:project_id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' }, 
      destroy: { method: 'DELETE' }
    });
  });
