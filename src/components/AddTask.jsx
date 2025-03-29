import axios from 'axios';
import React, { useState } from 'react'
import apiClient from './auth/ApiClient';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleTask = async (e) => {
        e.preventDefault();
        try{
            const requestBody = await apiClient.post(`api/v1/task/add`,{
                taskName,
                taskDescription
            });
            console.log(requestBody);
            navigate('/task');
        } catch (error) {
            console.error('Error adding task:', error);
            setError('Failed to add task. Please try again later.');
        }

    }

  return (
    <div className="vh-100 bg-black d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4 fw-bold">Task</h2>
                
                <form onSubmit={handleTask}>
                  {error && <div className="alert alert-danger">{error}</div>}
                  
                  <div className="mb-5">
                    <label htmlFor="taskName" className="form-label">
                      <i className="bi bi-envelope me-2"></i>Task Name
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="name" 
                      value={taskName}
                      placeholder="Title of your task"
                      onChange={(e) => setTaskName(e.target.value)}
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="taskDescription" className="form-label">
                      <i className="bi bi-lock me-2"></i>Task Description
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="name" 
                      value={taskDescription}
                      placeholder="Describe your task in 20-30 letters."
                      onChange={(e)=> setTaskDescription(e.target.value)}
                    />
                  </div>

                  

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg"
                    >
                      Add Task
                    </button>
                  </div>
                </form>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddTask
