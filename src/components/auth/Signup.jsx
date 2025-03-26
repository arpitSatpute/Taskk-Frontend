import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  return (
    <div className="vh-100 bg-black d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4 fw-bold">Create Account</h2>
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <i className="bi bi-person me-2"></i>Name
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary text-white" 
                      id="name" 
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <i className="bi bi-envelope me-2"></i>Email
                    </label>
                    <input 
                      type="email" 
                      className="form-control bg-secondary text-white" 
                      id="email" 
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <input 
                      type="password" 
                      className="form-control bg-secondary text-white" 
                      id="password" 
                      placeholder="Create a strong password"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      <i className="bi bi-phone me-2"></i>Phone
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary text-black" 
                      id="phone" 
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="text-center mt-3">
                  <small className="text-white">
                    Already have an account? <a href="/login" className="text-white">Log in</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;