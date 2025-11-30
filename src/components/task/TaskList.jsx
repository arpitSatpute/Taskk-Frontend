// src/components/ModernTaskList.jsx
import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, CheckCircle, Clock, AlertCircle, Trash2, Edit } from 'lucide-react';
import apiClient from '../auth/ApiClient';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/api/v1/task/get');
      setTasks(response.data.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (task) => {
    try {
      await apiClient.put(`api/v1/task/update/${task.taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await apiClient.delete(`api/v1/task/delete/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.taskName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || task.taskStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusConfig = (status) => {
    const configs = {
      COMPLETED: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', icon: CheckCircle },
      ONGOING: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', icon: Clock },
      PENDING: { color: '#6b7280', bg: 'rgba(107, 114, 128, 0.1)', icon: AlertCircle },
    };
    return configs[status] || configs.PENDING;
  };

  const filterButtons = [
    { label: 'All', value: 'ALL', color: '#3b82f6' },
    { label: 'Ongoing', value: 'ONGOING', color: '#f59e0b' },
    { label: 'Completed', value: 'COMPLETED', color: '#10b981' },
    { label: 'Pending', value: 'PENDING', color: '#6b7280' },
  ];

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #1a1a1a',
          borderTopColor: '#3b82f6',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}>
            My Tasks
          </h1>
          <p style={{ fontSize: '0.9375rem', color: '#a0a0a0' }}>
            Manage and track your tasks efficiently
          </p>
        </div>

        {/* Controls Bar */}
        <div style={{
          padding: '1.5rem',
          background: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '1rem',
          marginBottom: '1.5rem',
        }}>
          {/* Search & Add Button */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
              <Search size={18} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666666',
              }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  background: '#1a1a1a',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
            </div>
            <button
              onClick={() => window.location.href = '/task/add'}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#3b82f6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 150ms',
              }}
            >
              <Plus size={18} />
              Add Task
            </button>
          </div>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filterButtons.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setStatusFilter(filter.value)}
                style={{
                  padding: '0.5rem 1rem',
                  background: statusFilter === filter.value ? filter.color : 'transparent',
                  color: statusFilter === filter.value ? '#ffffff' : '#a0a0a0',
                  border: `1px solid ${statusFilter === filter.value ? filter.color : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 150ms',
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Task List */}
        {error ? (
          <div style={{
            padding: '2rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '1rem',
            color: '#ef4444',
            textAlign: 'center',
          }}>
            {error}
          </div>
        ) : filteredTasks.length === 0 ? (
          <div style={{
            padding: '4rem 2rem',
            background: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '1rem',
            textAlign: 'center',
          }}>
            <p style={{ color: '#a0a0a0', fontSize: '0.9375rem' }}>
              No tasks found
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredTasks.map((task) => {
              const statusConfig = getStatusConfig(task.taskStatus);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={task.taskId}
                  style={{
                    padding: '1.5rem',
                    background: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '1rem',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                      }}>
                        {task.taskName}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#a0a0a0',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                      }}>
                        {task.taskDescription}
                      </p>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.375rem 0.75rem',
                        background: statusConfig.bg,
                        border: `1px solid ${statusConfig.color}33`,
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: statusConfig.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        <StatusIcon size={14} />
                        {task.taskStatus}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleStatusUpdate(task)}
                        style={{
                          padding: '0.5rem',
                          background: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '0.5rem',
                          color: '#a0a0a0',
                          cursor: 'pointer',
                          transition: 'all 150ms',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#10b981';
                          e.target.style.borderColor = '#10b981';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#a0a0a0';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                        }}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.taskId)}
                        style={{
                          padding: '0.5rem',
                          background: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '0.5rem',
                          color: '#a0a0a0',
                          cursor: 'pointer',
                          transition: 'all 150ms',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#ef4444';
                          e.target.style.borderColor = '#ef4444';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#a0a0a0';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default TaskList;