import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(atob(token.split('.')[1]));
      setUser(userData);
    } catch (error) {
      console.error('Invalid token');
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const stats = [
    { title: 'Projects', value: '0', color: '#3b82f6' },
    { title: 'Completed Tasks', value: '0', color: '#10b981' },
    { title: 'Pending Tasks', value: '0', color: '#f59e0b' },
    { title: 'Overdue Tasks', value: '0', color: '#ef4444' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            TaskFlow Pro
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/dashboard" style={{ 
              color: '#3b82f6', 
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '2px solid #3b82f6',
              paddingBottom: '0.25rem'
            }}>
              Dashboard
            </a>
            <a href="/projects" style={{ 
              color: '#6b7280', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Projects
            </a>
            <a href="/tasks" style={{ 
              color: '#6b7280', 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Tasks
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: '#374151' }}>
            {user?.name || 'User'}
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: '700', 
            color: '#111827',
            margin: '0 0 0.5rem 0'
          }}>
            Welcome back, {user?.name || 'User'}.
          </h2>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Use the project and task pages to manage work across your team.
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.title}
              </h3>
              <p style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: stat.color,
                margin: 0
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827',
            margin: '0 0 1rem 0'
          }}>
            🎉 Get Started
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            Start by creating your first project or task to see them appear here.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/projects" style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              display: 'inline-block'
            }}>
              Create Project
            </a>
            <a href="/tasks" style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'white',
              color: '#3b82f6',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              border: '1px solid #3b82f6',
              display: 'inline-block'
            }}>
              Create Task
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
