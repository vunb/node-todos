var Todos = require('../models/todoModel');

function getTodos(res) {
    Todos.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
}
;

module.exports = function (app) {


    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });


    app.get('/api/todo/:id', function (req, res) {

        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;

            res.send(todo);
        });

    });

    app.post('/api/todo', function (req, res) {


        // create a todo, information comes from AJAX request from Angular
        Todos.create({
            text: req.body.text,
            isDone: req.body.isDone
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    app.put('/api/todo', function (req, res) {

        if (!req.body.id) {
            return res.status(500).send('ID is required');
        }

        Todos.update({
            _id: req.body.id
        }, {
                text: req.body.text,
                isDone: req.body.isDone
            }, function (err, todo) {
                if (err)
                    return res.send(err);

                return getTodos(res);
            });

    });

    app.delete('/api/todo/:todo_id', function (req, res) {

        Todos.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });

    });

}