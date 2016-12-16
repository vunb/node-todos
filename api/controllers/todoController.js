var Todos = require("../models/todoModel");

function getTodos(res) {
    Todos.find(function (err, todos) {

        if (err) {
            res.status(500).json(err);
        } else {
            res.json(todos);
        }

    });
}

module.exports = function (app) {

    // get all todos
    app.get("/api/todos", function (req, res) {
        getTodos(res);
    });

    // /api/todo/123456
    app.get("/api/todo/:id", function (req, res) {
        // check req.params.id is valid ?
        var id = req.params.id;
        if (!/^[-0-9a-fA-F]{24}$/.test(id)) {
            // Yes, it's not a valid ObjectId, otherwise proceed with `findById` call.
            return res.status(400).send("ObjectId is not valid: " + id);
        }
        Todos.findById({ _id: id }, function (err, todo) {
            if (err) {
                throw err;
            } else {
                res.json(todo);
            }
        });

    });

    /**
     * Create a todo
     */

    app.post("/api/todo", function (req, res) {

        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todos.create(todo, function (err, todo) {
            if (err) {
                throw err;
            } else {
                getTodos(res);
            }
        });

    });

    /**
     * Update a todo
     */

    app.put("/api/todo", function (req, res) {

        if (!/^[-0-9a-fA-F]{24}$/.test(req.body._id)) {
            return res.status(400).send("ID is required");
        } else {
            Todos.update({
                _id: req.body._id
            }, {
                    text: req.body.text,
                    isDone: req.body.isDone
                }, function (err, todo) {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        getTodos(res);
                    }
                });
        }
    });

    /**
     * Delete a todo
     */

    app.delete("/api/todo/:id", function (req, res) {
        // check req.params.id is valid ?
        var id = req.params.id;
        if (!/^[-0-9a-fA-F]{24}$/.test(id)) {
            // Yes, it's not a valid ObjectId, otherwise proceed with `findById` call.
            return res.status(400).send("ObjectId is not valid: " + id);
        }
        Todos.remove({
            _id: id
        }, function (err, todo) {
            if (err) {
                return res.status(500).json(err);
            } else {
                getTodos(res);
            }
        })

    });

}