import React, { createContext, useContext, useEffect, useState } from 'react';
import api, { setAuthToken } from './api';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = window.localStorage.getItem('taskflowUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => window.localStorage.getItem('taskflowToken') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    }
  }, [token]);

  const saveSession = (tokenValue, userData) => {
    setToken(tokenValue);
    setUser(userData);
    window.localStorage.setItem('taskflowToken', tokenValue);
    window.localStorage.setItem('taskflowUser', JSON.stringify(userData));
    setAuthToken(tokenValue);
  };

  const clearSession = () => {
    setToken(null);
    setUser(null);
    window.localStorage.removeItem('taskflowToken');
    window.localStorage.removeItem('taskflowUser');
    setAuthToken(null);
  };

  const register = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/api/auth/register', values);
      saveSession(response.data.token, response.data.user);
      return response.data.user;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/api/auth/login', values);
      saveSession(response.data.token, response.data.user);
      return response.data.user;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearSession();
  };

  const value = {
    user,
    token,
    loading,
    error,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
