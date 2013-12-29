function ProjectController($scope, $rootScope, ProjectItems, $routeParams) {

    var init = function () {
            if ($routeParams.Id) {
                $scope.project = ProjectItems.get({'id': $routeParams.Id}); 
            }
            else
            {
                $rootScope.projects = ProjectItems.query();
                // this should probably be broadcasted down instead of root
            }
        };


    $scope.update = function()  {

        if ($routeParams.Id) {
            $scope.project.$update();
            $scope.$emit('updateEvent', $scope.project);
        }
            else
        {
            var newproject = ProjectItems.create($scope.project);
            $scope.$emit('createEvent', $scope.project);
        }
    }


    $scope.destroy = function()  {

        $scope.project.$remove(); 
      //  $scope.$emit('removeEvent', $scope.project);

    }


    // update project on root scope
    // Destroy seems to update automaitcally but create / update not - strange!
    $scope.$on('updateEvent', function(event, data) { 
        var elementPos = $scope.projects.map(function(x) {return x.id; }).indexOf($scope.project.id);
        $scope.projects[elementPos] = $scope.project;
        });

    $scope.$on('createEvent', function(event, data) { 
        $scope.projects.push(data); //
         });


init();


$scope.tasks = function(view) {

  $scope.view = "tasks.html"

}

$scope.allMessages = function(view) {

  $scope.view = "allmessages.html"
}

$scope.updates = function(view) {

  $scope.view = "updates.html"

}

}



// MESSAGE CONTROLLERS

// NEXT STEP ASSOCIATE MESSAGES WITH A GIVEN PROJECT THEN ADD TASKS

function MessageController($scope, $rootScope, MessageItems, $routeParams) {

    var init = function () {
            if ($routeParams.messageId) {
                console.log('fetching one messages')
                $scope.message = MessageItems.get({'id': $routeParams.messageId}); 
            }
            else
            {
                console.log('fetching all messages')
                $scope.messages = MessageItems.query();
               // console.log($scope.messages)
            }
        };

/*
    $scope.update = function()  {

        if ($routeParams.Id) {
            $scope.project.$update();
            $scope.$emit('updateEvent', $scope.project);
        }
            else
        {
            var newproject = ProjectItems.create($scope.project);
            $scope.$emit('createEvent', $scope.project);
        }
    }


    $scope.destroy = function()  {

        $scope.project.$remove(); 
      //  $scope.$emit('removeEvent', $scope.project);

    }


    // update project on root scope
    // Destroy seems to update automaitcally but create / update not - strange!
    $scope.$on('updateEvent', function(event, data) { 
        var elementPos = $scope.projects.map(function(x) {return x.id; }).indexOf($scope.project.id);
        $scope.projects[elementPos] = $scope.project;
        });

    $scope.$on('createEvent', function(event, data) { 
        $scope.projects.push(data); //
         });
*/

init();

}

