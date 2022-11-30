const Todo = require('../models/todo');

// controller for creating a todo 
module.exports.createTodo = async (req, res) => {
    try {
        let desc = req.body.description;
        let status = req.body.status || "pending";
        await Todo.create({
            description: desc,
            status: status
        }).exec((err, todo) => {
            return res.status(200).json({
                todoId: todo._id
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
}


// for getting all the todos
module.exports.allTodos = async (req, res) => {
    // get all the todos
    try {
        await Todo.find({}).exec((err, todos) => {
            return res.status(200).json({
                todos: todos
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
}


// find the todo with given id
module.exports.todoById = async (req, res) => {
    try {
        await Todo.findById(req.params.id).exec((err, todo) => {
            if(todo){
                return res.status(200).json({
                    todo: todo
                });
            }

            return res.status(400).json({
                message: "Todo with this id doesn't exist !!"
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
}


// mark the todo status as done
module.exports.markDone = async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if(todo){
            todo.status = "done";
            await todo.save();
            return res.status(200).json({
                message: "Mark todo status as Done",
                todo: todo
            });
        }
        return res.status(400).json({
            message: "Todo with this id doesn't exist !!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
}


// delete the given id todo
module.exports.deleteTodo = async (req, res) => {
    try {
        let todo = await Todo.findByIdAndDelete(req.params.id);
        if(todo){
            return res.status(200).json({
                message: `Todo with id=${req.params.id} is deleted successfully.`,
                deletedTodo: todo
            });
        }
        return res.status(400).json({
            message: "Todo with this id doesn't exist !!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        });
    }
}