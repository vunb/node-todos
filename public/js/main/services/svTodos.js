var app = angular.module("app.todos")

app.factory("svTodos", ["$http", function ($http) {
    
    return {
        get: function () {
            return $http.get("/api/todos");
        },
        create: function (todoData) {
            return $http.post("/api/todo", todoData);
        },
        update: function (todoData) {
            return $http.put("/api/todo", todoData);
        },
        delete: function (id) {
            return $http.delete("/api/todo/" + id);
        }
    }
    
}]);