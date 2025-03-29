import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from './auth/ApiClient';

const TaskCard = ({ task, onStatusUpdate }) => {
  console.log('Task in TaskCard:', task); // Debugging
  return (
    <div
      className="card mb-3 bg-dark text-white shadow-sm border-0"
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title text-info">{task.taskName}</h5>
            <p className="card-text text-white">{task.taskDescription}</p>
          </div>
          <div className="d-flex align-items-center justify-content-end gap-5">
            <span
              className={`badge ${
                task.taskStatus === 'COMPLETED'
                  ? 'bg-success'
                  : 'bg-warning text-dark'
              }`}
            >
              {task.taskStatus}
            </span>
            <div className="d-flex align-items-center justify-content-end gap-3">
              <button
                className="btn btn-success"
                onClick={() => onStatusUpdate(task)}
              >
                <i className="bi bi-pencil fs-5"></i>
              </button>
              <button className="btn btn-danger">
                <i className="bi bi-trash fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/api/v1/task/get');
        setTasks(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tasks. Please try again later.');
        console.error(err);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.taskName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'ALL' || task.taskStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = async (task) => {
    try {
      const response = await apiClient.put(`api/v1/task/update/${task.taskId}`);
      console.log('Task updated:', response.data);
    } catch (error) {
      console.error('Error updating task:', error);
      setError('Failed to update task. Please try again later.');
    }
  };
  
  return (
    <div
      className="min-vh-100 text-white py-5 bg-black"
      style={{
        background:
          'linear-gradient(to right, rgba(0, 1, 0, 0.3), rgba(253, 254, 253, 0.3))',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container">
        <div className="shadow-lg rounded p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h1 className="h3 text-white mb-3 fs-1">Task List</h1>
            <div className="d-flex flex-wrap gap-2">
              <button
                className="btn btn-info btn-sm btn-lg-md"
                onClick={() => navigate('/task/add')}
              >
                <i className="bi bi-plus-lg fs-4"></i>
              </button>
              <button
                className={`btn ${
                  statusFilter === 'ALL' ? 'btn-primary' : 'btn-outline-primary'
                } btn-lg`}
                onClick={() => setStatusFilter('ALL')}
              >
                <i className="bi bi-list-task"></i>
              </button>
              <button
                className={`btn ${
                  statusFilter === 'ONGOING'
                    ? 'btn-warning'
                    : 'btn-outline-warning'
                } btn-lg`}
                onClick={() => setStatusFilter('ONGOING')}
              >
                <i className="bi bi-hourglass-split"></i>
              </button>
              <button
                className={`btn ${
                  statusFilter === 'COMPLETED'
                    ? 'btn-success'
                    : 'btn-outline-success'
                } btn-lg`}
                onClick={() => setStatusFilter('COMPLETED')}
              >
                <i className="bi bi-check-circle"></i>
              </button>
            </div>
          </div>
          <div className="input-group text-white mt-2">
            <input
              type="text"
              className="form-control bg-secondary border-secondary text-white"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-dark" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
  
        {loading ? (
          <div className="text-center text-secondary">Loading...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center text-secondary">No tasks found</div>
        ) : (
          <div>
            {console.log('Filtered tasks:', filteredTasks)} {/* Debugging */}
            {filteredTasks.map((task, index) => (
              <TaskCard
                key={task.id || index} // Use task.id or fallback to index
                task={task}
                onStatusUpdate={() => handleStatusUpdate(task)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default TaskList;