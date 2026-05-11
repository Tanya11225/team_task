import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Projects Page</h1>
      <p>Projects will appear here</p>
      <button onClick={() => alert('Create Project clicked!')} style={{
        padding: '10px 20px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Create Project
      </button>
      <br /><br />
      <button onClick={() => navigate('/dashboard')} style={{
        padding: '10px 20px',
        backgroundColor: '#6b7280',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ProjectsPage;
