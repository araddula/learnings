angular.module('Controllers',[])

.controller('AddCtrl',['$scope',function($scope){
    $scope.list = [];
    $scope.addTodo = function(todo){
        $scope.list.push(todo);
        $scope.todo = "";
    }
    $scope.deleteTodo = function(todo){
        var itempos = $scope.list.indexOf(todo);
        $scope.list.splice(itempos,1);
    }
}])