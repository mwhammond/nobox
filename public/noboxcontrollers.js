
//var nobox = angular.module('nobox');

App.controller('ListCtrl', ['$scope', 'Projects', function($scope, Projects) {
    //Grab all forums from the server
    $scope.projects = Projects.query();
    //$scope.projects = Data;


}]);

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



//A controller to show the forum and all it's glory
App.controller('ShowCtrl', ['$scope', 'Projects', '$routeParams', function($scope, Projects, $routeParams) {
    //Grab the forum from the server 
    $scope.project = Projects.get({'id': $routeParams.id});

    $scope.view = "tasks.html"


$scope.save = function() { 

$scope.project.$update();
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


