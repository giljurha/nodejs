const Task = require('../model/task.js'); // 모델 import

const taskController = {};

// Create task
taskController.createTask = async (req, res) => {
  try {
    const { task, isCompleted } = req.body;
    const newTask = new Task({ task, isCompleted });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// Get all tasks
taskController.getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ status: "ok", data: tasks });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// Update a task by ID
taskController.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, isCompleted } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, isCompleted },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ status: "fail", message: "Task not found" });
    }
    res.status(200).json({ status: "ok", data: updatedTask });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

// Delete a task by ID
taskController.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ status: "fail", message: "Task not found" });
    }
    res.status(200).json({ status: "ok", message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

module.exports = taskController;