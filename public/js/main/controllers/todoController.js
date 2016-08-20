var app = angular.module('app.todos');

app.controller('todoController', ['$scope', 'svTodos', function ($scope, svTodos) {

    $scope.todos = [];
    $scope.formData = {};
    //$scope.loading = true;

    svTodos.get()
    .success(function (data) {
        $scope.todos = data;
        $scope.loading = false;
    });


    $scope.createTodo = function () {

        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        $scope.todos.push(todo);
        $scope.formData.text = "";
    }

    $scope.deleteTodo = function (todo) {
        // Delete todo by Id
        console.log("Delete todo", todo);
    }

    $scope.updateTodo = function (todo) {
        // update 
        console.log("Update todo: ", todo);
    };
}]);