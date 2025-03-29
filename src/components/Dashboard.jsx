import React from 'react';

function Dashboard() {
  return (
    <div
      className="bg-black text-white"
      style={{
        background: "linear-gradient(to right, rgba(0, 1, 0, 0.3), rgba(253, 254, 253, 0.3))",
        backdropFilter: "blur(10px)",
      }}
    >
      <title>Dashboard</title>
      <div className="container min-vh-100 py-4">
        <h1 className="text-white text-center mb-4">Dashboard</h1>

        {/* Profile and Daily Score Section */}
        <div className="row g-4 justify-content-center">
          {/* Profile Info */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark bg-opacity-90 shadow-lg rounded p-4">
              <div className="card-body bg-black shadow-lg rounded p-4 d-flex flex-column align-items-center justify-content-center">
                <h4 className="text-white mb-3 fs-6">Arpit</h4>
                <h4 className="text-white mb-3 fs-6">arpitsatpute3964@gmail.com</h4>
              </div>
            </div>
          </div>

          {/* Daily Score */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-black p-4 d-flex justify-content-center align-items-center shadow-lg rounded">
              <div className="progress-circle" style={{ '--percentage': 75 }}>
                <div className="progress-circle-inner">
                  <span className="progress-circle-text">75%</span>
                </div>
              </div>
              <span className="text-white mt-2">Daily Score</span>
            </div>
          </div>
        </div>

        {/* Task Summary Section */}
        <div className="row mt-4 g-4 justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <div className="card bg-dark">
                <div className="card-body bg-secondary bg-opacity-50 shadow-lg rounded p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-white fs-6">Task Created:</h4>
                    <h4 className="text-white fs-6">12</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-white fs-6">Task Completed:</h4>
                    <h4 className="text-white fs-6">8</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-white fs-6">Task Pending:</h4>
                    <h4 className="text-white fs-6">4</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-white fs-6">Task Ongoing:</h4>
                    <h4 className="text-white fs-6">2</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* Weekly Score Section */}
        <h1 className="text-white text-center mt-5">Weekly Score</h1>
        <div className="row g-3 justify-content-center mt-3">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="card bg-dark p-1 text-white d-flex justify-content-center align-items-center border-0">
                <div className="progress-circle" style={{ '--percentage': 75 }}>
                  <div className="progress-circle-inner">
                    <span className="progress-circle-text">75%</span>
                  </div>
                </div>
                <span>Day {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;