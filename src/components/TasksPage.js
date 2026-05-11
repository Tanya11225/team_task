import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    // Load dummy data for demo
    setTasks([
      { _id: '1', title: 'Sample Task', description: 'This is a demo task', priority: 'high', status: 'todo', dueDate: '2026-05-20' }
    ]);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to local state for demo
    const newTask = {
      _id: Date.now().toString(),
      ...formData,
      status: 'todo'
    };
    setTasks([...tasks, newTask]);
    setShowForm(false);
    setFormData({ title: '', description: '', priority: 'medium', dueDate: '' });
  };

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task._id === id ? { ...task, status: newStatus } : task
    ));
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>TaskFlow Pro</h1>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/dashboard" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Dashboard</a>
            <a href="/projects" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
            <a href="/tasks" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500', borderBottom: '2px solid #3b82f6', paddingBottom: '0.25rem' }}>Tasks</a>
          </div>
        </div>
        <button onClick={() => { localStorage.removeItem('token'); navigate('/login'); }} style={{
          padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer'
        }}>Sign out</button>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#111827', margin: 0 }}>Tasks</h2>
          <button onClick={() => setShowForm(true)} style={{
            padding: '0.75rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer'
          }}>Create Task</button>
        </div>

        {/* Create Form */}
        {showForm && (
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Create New Task</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Task Title</label>
                <input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows="3" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}></textarea>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Priority</label>
                <select value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Due Date</label>
                <input type="date" value={formData.dueDate} onChange={(e) => setFormData({...formData, dueDate: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Create Task</button>
                <button type="button" onClick={() => setShowForm(false)} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        {/* Tasks List */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {tasks.map((task) => (
            <div key={task._id} style={{
              backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', margin: '0 0 0.5rem 0' }}>{task.title}</h3>
                  <p style={{ color: '#6b7280', margin: '0' }}>{task.description}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    backgroundColor: task.status === 'completed' ? '#d1fae5' : task.status === 'in-progress' ? '#dbeafe' : '#f3f4f6',
                    color: task.status === 'completed' ? '#059669' : task.status === 'in-progress' ? '#2563eb' : '#6b7280'
                  }}>
                    {task.status}
                  </span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    backgroundColor: getPriorityColor(task.priority),
                    color: 'white'
                  }}>
                    {task.priority}
                  </span>
                </div>
              </div>
              
              {/* Status Update Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button onClick={() => updateStatus(task._id, 'todo')} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: task.status === 'todo' ? '#3b82f6' : '#f3f4f6',
                  color: task.status === 'todo' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>To Do</button>
                <button onClick={() => updateStatus(task._id, 'in-progress')} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: task.status === 'in-progress' ? '#3b82f6' : '#f3f4f6',
                  color: task.status === 'in-progress' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>In Progress</button>
                <button onClick={() => updateStatus(task._id, 'completed')} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: task.status === 'completed' ? '#3b82f6' : '#f3f4f6',
                  color: task.status === 'completed' ? 'white' : '#374151',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>Completed</button>
              </div>
              
              <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '1rem' }}>
                Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Not set'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
