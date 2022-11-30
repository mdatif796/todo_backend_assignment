const mongoose = require('mongoose');


// creating schema for todo
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending",
        required: true
    }
}, {
    timestamps: true
});

// creating model for todo schema
const Todo = new mongoose.model('Todo', todoSchema);

module.exports = Todo;