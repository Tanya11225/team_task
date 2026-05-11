import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Decode token to get user info
    try {
      const userData = JSON.parse(atob(token.split('.')[1]));
      setUser(userData);
    } catch (error) {
      console.error('Invalid token');
      localStorage.removeItem('token');
      navigate('/login');
    }
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem',
          backgroundColor: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ color: '#1f2937', margin: 0 }}>
            Welcome, {user?.name || 'User'}!
          </h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Logout
          </button>
        </div>

        {/* Dashboard Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>Total Projects</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>0</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>Completed Tasks</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', margin: 0 }}>0</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>Pending Tasks</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b', margin: 0 }}>0</p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#6b7280', margin: '0 0 0.5rem 0' }}>Your Role</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6', margin: 0, textTransform: 'capitalize' }}>
              {user?.role || 'employee'}
            </p>
          </div>
        </div>

        {/* Welcome Message */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>
            🎉 Welcome to TaskFlow Pro!
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Your dashboard is ready. Start managing your projects and tasks!
          </p>
          <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '0.9rem' }}>
            (Backend API integration in progress - UI Demo)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
