var Todos = require('../models/todoModel');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       var seedTodos = [
           {
               text: 'Học Node.js',
               isDone: false
           },
           {
               text: 'Học Angular.js',
               isDone: false
           },
           {
               text: 'Viết một ứng dụng hoàn chỉnh',
               isDone: false
           }
       ];
       
       Todos.create(seedTodos, function(err, results) {
           res.send(results);
       }); 
   });
    
}
