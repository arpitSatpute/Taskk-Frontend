import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container mt-5">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-12 col-md-4">
            <h4 className="font-monospace mb-3">Taskk</h4>
            <p className="text-white-50 mb-2">Your efficient task management solution</p>
            <p className="text-white-50 small">Helping you stay productive since 2024</p>
            <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/arpitSatpute" className="text-white hover-opacity">
                <FaGithub size={20} />
              </a>
              <a href="https://x.com/arpit_jsx" className="text-white hover-opacity">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arpitsatpute/" className="text-white hover-opacity">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:arpitrameshsatpute6986@gmail.com" className="text-white hover-opacity">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4">
            <h5 className="font-monospace mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light-50 text-decoration-none hover-light">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light-50 text-decoration-none hover-light">Features</a>
              </li>
              <li className="mb-2">
                <a href="/dashboard" className="text-light-50 text-decoration-none hover-light">Dashboard</a>
              </li>
             
              <li>
                <a href="/task" className="text-light-50 text-decoration-none hover-light">Task</a>
              </li>
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div className="col-6 col-md-4">
            <h5 className="font-monospace mb-3">Stay Updated</h5>
            <p className="text-white small mb-3">Stay tuned for new features.</p>
            <h3>Thanks for visiting !!!</h3>
            <p className="text-white small">We respect your privacy</p>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/* Copyright */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0 text-white small">© {currentYear} Taskk. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white small text-decoration-none hover-light">Privacy Policy</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white small text-decoration-none hover-light">Terms of Service</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white small text-decoration-none hover-light">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;