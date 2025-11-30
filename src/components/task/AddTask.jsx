
// src/components/ModernAddTask.jsx
import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import apiClient from '../auth/ApiClient';

export default function ddTask() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await apiClient.post('api/v1/task/add', {
        taskName,
        taskDescription,
      });
      window.location.href = '/task';
    } catch (err) {
      setError('Failed to add task. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}>
            Create New Task
          </h1>
          <p style={{ fontSize: '0.9375rem', color: '#a0a0a0' }}>
            Add a new task to your list
          </p>
        </div>

        {/* Form Card */}
        <div style={{
          padding: '2rem',
          background: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '1rem',
        }}>
          <div onSubmit={handleSubmit}>
            {error && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '0.5rem',
                color: '#ef4444',
                fontSize: '0.875rem',
                marginBottom: '1.5rem',
              }}>
                {error}
              </div>
            )}

            {/* Task Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}>
                Task Name *
              </label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task title"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'all 150ms',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Task Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}>
                Description *
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Describe your task (20-30 characters recommended)"
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 150ms',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
            }}>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '0.875rem',
                  background: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 150ms',
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.target.style.background = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) e.target.style.background = '#3b82f6';
                }}
              >
                <Save size={18} />
                {isLoading ? 'Adding...' : 'Add Task'}
              </button>
              <button
                type="button"
                onClick={() => window.location.href = '/task'}
                style={{
                  padding: '0.875rem',
                  background: 'transparent',
                  color: '#a0a0a0',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 150ms',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1a1a1a';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#a0a0a0';
                }}
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}