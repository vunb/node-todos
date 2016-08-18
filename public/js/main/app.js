var app = angular.module('app.todos', ["xeditable"]);

app.controller('todoController', ['$scope', function ($scope) {

    $scope.todos = [];
    $scope.formData = {};
    //$scope.loading = true;

    $scope.todos = [
        {
            text: "Khởi tạo dự án, include thư viện bootstrap, fontawesome, angularjs",
            isDone: true
        }, {
            text: "Cài đặt angularjs app, controller, khởi tạo dữ liệu ban đầu",
            isDone: true
        }, {
            text: "Tạo services gọi api, binding dữ liệu, action, ...",
            isDone: false
        }, {
            text: "Hoàn thiện ứng dụng, deploy lên heroku ...",
            isDone: false
        }

    ];

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