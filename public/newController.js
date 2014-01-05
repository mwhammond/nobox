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



$scope.$on('$includeContentLoaded', function() {TaskList.initTaskWidget();
console.log('worked')

      $(function() {
          $( "#sortable" ).sortable();
          $( "#sortable" ).disableSelection();
      });

});


$scope.tasks = function(view) {

  $scope.view = "todos.html"
}

$scope.allMessages = function(view) {

  $scope.view = "allmessages.html"
}

$scope.updates = function(view) {

  $scope.view = "updates.html"

}

}


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

*/

function TodoCtrl($scope, $rootScope, TaskItems, $routeParams) {


  $scope.todos = TaskItems.query();
 
  $scope.addTodo = function() {
    var newTask = {text:$scope.todoText, archive:false}
    TaskItems.create(newTask);
    $scope.todos.push(newTask);
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    console.log('removed')
    // CHANGE THIS BEHAVIOUR TO MORE LIKE THE DEMO, DECIDE LATER WHETHER TO PURGE DONE TASKS
    //$scope.todo.$remove(); 
    //$scope.todo.$remove(); 
   // var oldTodos = $scope.todos;
   // $scope.todos = [];
   // angular.forEach(oldTodos, function(todo) {
   //   if (!todo.done) $scope.todos.push(todo);
   // });
  };
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


        $scope.sync = function () {

            console.log('sync')
            MessageItems.load();
        }

    //    var sync = function () {
     //      // MessageItems.query();  
     //      console.log('refreshing') 
     //       Post.pullMail({action:'pullMail'})
                
     //   }

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

