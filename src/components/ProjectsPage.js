import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
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
    setProjects([
      { _id: '1', name: 'Sample Project', description: 'This is a demo project', status: 'active', dueDate: '2026-06-01' }
    ]);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to local state for demo
    const newProject = {
      _id: Date.now().toString(),
      ...formData,
      status: 'active'
    };
    setProjects([...projects, newProject]);
    setShowForm(false);
    setFormData({ name: '', description: '', dueDate: '' });
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
            <a href="/projects" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500', borderBottom: '2px solid #3b82f6', paddingBottom: '0.25rem' }}>Projects</a>
            <a href="/tasks" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: '500' }}>Tasks</a>
          </div>
        </div>
        <button onClick={() => { localStorage.removeItem('token'); navigate('/login'); }} style={{
          padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer'
        }}>Sign out</button>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#111827', margin: 0 }}>Projects</h2>
          <button onClick={() => setShowForm(true)} style={{
            padding: '0.75rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '500', cursor: 'pointer'
          }}>Create Project</button>
        </div>

        {/* Create Form */}
        {showForm && (
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Create New Project</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Project Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows="3" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}></textarea>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Due Date</label>
                <input type="date" value={formData.dueDate} onChange={(e) => setFormData({...formData, dueDate: e.target.value})} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Create Project</button>
                <button type="button" onClick={() => setShowForm(false)} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {projects.map((project) => (
            <div key={project._id} style={{
              backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', margin: '0 0 0.5rem 0' }}>{project.name}</h3>
                  <p style={{ color: '#6b7280', margin: '0 0 1rem 0' }}>{project.description}</p>
                </div>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backgroundColor: project.status === 'active' ? '#d1fae5' : project.status === 'completed' ? '#dbeafe' : '#fef3c7',
                  color: project.status === 'active' ? '#059669' : project.status === 'completed' ? '#2563eb' : '#d97706'
                }}>
                  {project.status}
                </span>
              </div>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                Due: {project.dueDate ? new Date(project.dueDate).toLocaleDateString() : 'Not set'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
