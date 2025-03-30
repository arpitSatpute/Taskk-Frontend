import React, { useState } from "react";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage toggle

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed); // Toggle the state
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black bg-opacity-90">
        <div className="container-fluid d-flex align-items-center">
          {/* Brand Name */}
          <a className="navbar-brand text-white" href="/">
            Taskk
          </a>

          {/* Navbar Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarText"
            aria-expanded={!isCollapsed} // Dynamically set aria-expanded
            aria-label="Toggle navigation"
            onClick={handleToggle} // Handle toggle state
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar */}
          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="/task">
                  Task
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/dashboard">
                  Dashboard
                </a>
              </li>
              
            </ul>
          </div>

          {/* Sign Up Button */}
          <div className="d-none d-lg-flex">
            <button className="btn btn-primary text-white " onClick={()=> {
              window.location.href="/signup"
            }}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;