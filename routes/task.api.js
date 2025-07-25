const express = require('express');
const router = express.Router();
const taskController = require('../controller/task.controller');

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks (or a specific task if you modify the controller)
router.get('/', taskController.getTask);

// Update a task by ID
router.put('/:id', taskController.updateTask);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;