angular.module('Controllers',[])

.controller('TodoCtrl',['$scope',function($scope){
    $scope.list = [];
    $scope.editMode = false;
    $scope.addTodo = function(todo){
        if(todo.length){
            $scope.list.push(todo);
            $scope.todo = "";  
        }else{
            return false;
        }
    }
    $scope.deleteTodo = function(todo){
        var itempos = $scope.list.indexOf(todo);
        $scope.list.splice(itempos,1);
    }
    $scope.editTodo = function(todo){
        $scope.editMode = true;
    }
    $scope.updateTodo = function(todo,index){
        $scope.list[index] = todo;
        $scope.editMode = false;
    }
}])