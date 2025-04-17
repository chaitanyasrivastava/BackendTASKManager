import express from 'express';
import {
  getAllTasks,
  getCreateTaskForm,
  createTask,
  getEditTaskForm,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

// Get all tasks (homepage)
router.get('/', getAllTasks);

// Create task routes
router.get('/tasks/create', getCreateTaskForm);
router.post('/tasks', createTask);

// Edit task routes
router.get('/tasks/edit/:id', getEditTaskForm);
router.post('/tasks/update/:id', updateTask);

// Delete task route
router.get('/tasks/delete/:id', deleteTask);

export default router;