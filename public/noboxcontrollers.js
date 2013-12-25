
var nobox = angular.module('nobox');

nobox.controller('ListCtrl', ['$scope', 'Projects', function($scope, Projects) {
    //Grab all forums from the server
    $scope.projects = Projects.query();


}]);

nobox.controller('CreateCtrl', ['$scope', '$location', 'Projects', function($scope, $location, Projects) {
    //The save method which is called when the user wants to submit their data
    $scope.save = function() {

        //Create the forum object to send to the back-end
        var project = new Projects($scope.project);

        //Save the forum object
        project.$save(function() {

            //Redirect us back to the main page
            $location.path('/');

        }, function(response) {

            //Post response objects to the view
            $scope.errors = response.data.errors;
        });
    }
}]);

/*
nobox.controller('EditCtrl', ['$scope', '$location', 'Projects', '$routeParams', function($scope, $location, $routeParams, Projects) {
    //The save method which is called when the user wants to submit their data
   // $scope.project = Projects.get({'id': $routeParams.id});


$scope.save = function() {
  
var project = Projects.get({id: 15});
project.name="tesalate";
project.$save();
}

/*
  return Projects.save({}, {
    project: {
      name: $scope.project.name,
    }
  }, function(response) {
    return $location.path("/projects");
  }, function(response) {});
};

var todo2 = Todo.get({id: 123});
todo2.foo += '!';
todo2.$save();


}]);

*/






//A controller to show the forum and all it's glory
nobox.controller('ShowCtrl', ['$scope', 'Projects', '$routeParams', function($scope, Projects, $routeParams) {
    //Grab the forum from the server 
    $scope.project = Projects.get({'id': $routeParams.id});

$scope.save = function() {
  
$scope.project.name="tesalate";
$scope.project.$update();
}


    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        Projects.remove({id: $scope.project.id}, function() {
            //If successful, remove it from our collection
           // $scope.projects.splice(index, 1);
           $location.path( '/' );
        });
    }

}]);





/*
function ListCtrl($scope, Projects, $location, $routeParams) {
    "use strict";
    $scope.projects = Projects.query({id: 11});
};





/*

function ShowCtrl($scope, $location, $routeParams, Project) {
  "use strict";
    $scope.project = Project.show({
      project_id : $routeParams.projectId
})
};


function EditCtrl($scope, $routeParams, $location, Project) {
    "use strict";
    
    $scope.master = {};
    var project_id = $routeParams.projectId;
    $scope.project = Project.show({
        project_id : project_id
    }, function(resource) {
        $scope.master = angular.copy(resource);
    });

    $scope.update = function(project) {
        project.$update({
            project_id : project_id
        }, function(updatedProject) {
            $location.path('/projects/' + updatedProject.id);
        });
    }
}

*/



    
