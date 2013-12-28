
//var nobox = angular.module('nobox');



// SIDEBAR CONTROLLER

App.controller('ListCtrl', ['$scope', '$rootScope', 'Projects', function($scope, $rootScope, Projects) {
    //Grab all forums from the server
    //$scope.projects = Projects.query();
    $rootScope.projects = Projects.query();
    //$scope.projects = ProjectList;
    //console.log($scope.projects);
    //$scope.projects = Data;
    //$scope.updates = Updates;

}]);




//PROJECT SUMMARY CONTROLLER

App.controller('ShowCtrl', ['$scope', '$rootScope', 'Projects', '$routeParams', 'getById', function($scope, $rootScope, Projects, $routeParams, getById) {
    //Grab the forum from the server 
    $scope.project = Projects.get({'id': $routeParams.id});

    $scope.view = "tasks.html"

    //$scope.projects = $rootScope.projects[0];


     $scope.showdetails = function(project_id){
         var found = $filter('getById')($rootScope.projects, project_id);
         console.log(found);
         $scope.selected = JSON.stringify(found);
     }


    //$scope.project = $scope.projects

$scope.save = function() { 

$scope.project.$update();

$scope.project.showdetails($scope.project.id);

var ind = $rootScope.projects[0].indexOf( 44 );
$filter('filter')(array, {name:"M"}, comparator) //BUILD THIS FILTER


console.log($rootScope.projects)
console.log(ind)

console.log($rootScope.projects[0].name)
console.log($scope.project.name);

$rootScope.projects[0].name = $scope.project.name;
console.log($rootScope.projects[0].name)




}


// PAGE SWITCH

$scope.tasks = function(view) {

  $scope.view = "tasks.html"

}

$scope.messages = function(view) {

  $scope.view = "messages.html"
}

$scope.updates = function(view) {

  $scope.view = "updates.html"

}


    //Destroy method for deleting a forum
    $scope.destroy = function(index) {

        //Tell the server to remove the object
        Projects.remove({id: $scope.project.id}, function() {
            //If successful, remove it from our collection
           // $scope.projects.splice(index, 1);
        
    
         //  $location.path( '/' );
        });
    }

}]);


// NEW PROJECT PAGE


App.controller('CreateCtrl', ['$scope', '$location', 'Projects', function($scope, $location, Projects) {
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

