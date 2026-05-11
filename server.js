
// Models
const Project = require('./models/Project');
const Task = require('./models/Task');

// Project Routes
// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().populate('createdBy', 'name email');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create project
app.post('/api/projects', async (req, res) => {
  try {
    const { name, description, dueDate } = req.body;
    const project = new Project({
      name,
      description,
      dueDate,
      createdBy: req.userId // From JWT token
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('assignedTo', 'name email')
      .populate('project', 'name');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create task
app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, project, assignedTo, priority, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      project,
      assignedTo,
      createdBy: req.userId,
      priority,
      dueDate
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
