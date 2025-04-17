import Task from '../models/taskModel.js';

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.render('index', { tasks });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Failed to retrieve tasks' });
  }
};

// Get task creation form
export const getCreateTaskForm = (req, res) => {
  res.render('create');
};

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    await Task.create({ title, description, status });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Failed to create task' });
  }
};

// Get task edit form
export const getEditTaskForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).render('error', { error: 'Task not found' });
    }
    res.render('edit', { task });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Failed to retrieve task' });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description, status });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Failed to update task' });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'Failed to delete task' });
  }
};