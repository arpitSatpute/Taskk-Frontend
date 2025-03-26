import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    <div className="vh-100 bg-black d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4 fw-bold">Log In</h2>
                
                <form>
                  
                  <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                      <i className="bi bi-envelope me-2"></i>Email
                    </label>
                    <input 
                      type="email" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="email" 
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="password" className="form-label">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <input 
                      type="password" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="password" 
                      placeholder="Enter password"
                    />
                  </div>

                  

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <div className="text-center mt-3">
                  <small className="text-white">
                    No account? <a href="/signup" className="text-white">Signup</a>
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

export default Login;