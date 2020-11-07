const Todo = require('../models/todoModel');

exports.getTodo =   function(req, res){ 
res.send({message:"oppa"});
}


exports.createTodo = async function(req, res){
    
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo.toJSON());
}

// exports.authenticate = async function(req, res){
    
//     const user = new User(req.body);
//     await user.save();
//     res.json(user.toJSON());
// }