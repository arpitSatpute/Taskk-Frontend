import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskCard = ({ task, onClick }) => (
  <div
    className="card mb-3 bg-dark text-white shadow-sm border-0"
    // onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title text-info">{task.title}</h5>
          <p className="card-text text-white">{task.description}</p>
        </div>
        <div className="d-flex align-items-center justify-content-end gap-5">
          <span
            className={`badge ${task.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}
          >
            {task.status}
          </span>
          <div className="d-flex align-items-center justify-content-end gap-3">
            <button className="btn btn-success">
              <i className="bi bi-check fs-5"></i>
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

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dummyTasks = [
    { id: 1, title: 'Complete Project Report', description: 'Prepare the final project report for submission.', status: 'Pending' },
    { id: 2, title: 'Team Meeting', description: 'Discuss project updates with the team.', status: 'Completed' },
    { id: 3, title: 'Code Review', description: 'Review the codebase for the new feature.', status: 'Pending' },
    { id: 6, title: 'Complete Project Report', description: 'Prepare the final project report for submission.', status: 'Pending' },
    { id: 7, title: 'Team Meeting', description: 'Discuss project updates with the team.', status: 'Completed' },
    { id: 8, title: 'Code Review', description: 'Review the codebase for the new feature.', status: 'Pending' },
    { id: 4, title: 'Client Presentation', description: 'Present the project progress to the client.', status: 'Completed' },
    { id: 5, title: 'Update Documentation', description: 'Update the project documentation with recent changes.', status: 'Pending' },
  ];

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate API call
        setTimeout(() => {
          setTasks(dummyTasks);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch tasks. Please try again later.');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (task) => {
    navigate(`/tasks/${task.id}`);
  };

  const filteredTasks = searchQuery
    ? tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tasks;

  return (
    <div className="min-vh-100 text-white py-5 bg-black" style={{
      background:
        "linear-gradient(to right, rgba(0, 1, 0, 0.3), rgba(253, 254, 253, 0.3))",
      backdropFilter: "blur(10px)",
    }}>
      <div className="container">
        <div className=" shadow-lg rounded p-4 mb-4 ">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 text-white mb-3 fs-1">Task List</h1>
            <div className="d-flex gap-3">
              <button className="btn btn-lg bg-primary">All</button>
              <button className="btn btn-lg bg-warning">Ongoing</button>
              <button className="btn btn-lg "style={{background: '#119602'}}>Completed</button>
            </div>
          </div>
          <div className="input-group text-white">
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
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;