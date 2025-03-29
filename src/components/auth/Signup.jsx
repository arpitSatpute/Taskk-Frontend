import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Entered Signup");
    await signup({ name, email, password, phone });
    console.log("Done Signup");
    navigate('/login');
    console.log("Navigated to Login");
    
  }

  return (
    <div className="vh-100 bg-black d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4 fw-bold">Create Account</h2>
                
                <form onSubmit={handleSignup}>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <i className="bi bi-person me-2"></i>Name
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <i className="bi bi-envelope me-2"></i>Email
                    </label>
                    <input 
                      type="email" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <input 
                      type="password" 
                      className="form-control bg-secondary border-black shadow-sm text-white" 
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      <i className="bi bi-phone me-2"></i>Phone
                    </label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary border-black shadow-sm text-black" 
                      id="phone" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-lg "
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