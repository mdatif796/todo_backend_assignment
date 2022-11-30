const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.post('/api/todo', homeController.createTodo);   // for creating todo
router.get('/api/todos', homeController.allTodos);     // for getting all the todos
router.get('/api/todo/:id', homeController.todoById);   // for getting todo with the given id
router.post('/api/todo/:id/done', homeController.markDone);  // mark the status as done
router.delete('/api/todo/:id/delete', homeController.deleteTodo);  // delete the todo with given id

module.exports = router;