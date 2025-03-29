import React, {  } from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {

  
  return (
    <div className="bg-black text-white "style={{
      background:
        "linear-gradient(to right, rgba(0, 1, 0, 0.3), rgba(253, 254, 253, 0.3))",
      backdropFilter: "blur(10px)",
    }}>
      <div className="container py-4">
        {/* Header Section */}
        <section className="row justify-content-center min-vh-100 align-items-center">
          <div className="col-12 col-md-10 col-lg-8 text-center mb-5">
            <p
              className="my-4 fw-bold font-monospace "
              style={{ fontSize: "3.5rem" }}
            >
              <Typewriter
                words={["Welcome to Taskk...."]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={50}
              />
            </p>
            <div className="px-3 px-md-4">
              <p className="lh-lg mb-3 text-justify fs-6">
                Taskk is a user-friendly task management application designed to
                help you organize and track your daily tasks efficiently. With
                features like adding, updating, and deleting tasks, it
                encourages productivity and ensures timely execution of your
                goals.
              </p>
              <p className="lh-lg text-justify fs-6">
                Taskk's features highlight its reliability as a task management
                application. Users can easily add, delete, and update tasks,
                ensuring flexibility in managing their workflow. The app
                provides a list of pending tasks, helping users stay organized.
                Real-time tracking of Daily and Weekly Scores motivates users to
                achieve their goals. Additionally, notifications ensure users
                never miss important tasks, making Taskk a dependable
                productivity tool.
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}

        {/* Features Section */}
        <section>
          <h2 className="text-center my-5 font-monospace fw-bold">FEATURES</h2>
          <div className="row justify-content-center">
            {/* Task Card */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 bg-info bg-opacity-70 custom-shadow hover-scale">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Task
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    You can create n number of tasks. Update their status as per
                    your execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card h-100 custom-shadow hover-scale"
                style={{ backgroundColor: "rgb(62, 162, 60, 0.90)" }}
              >
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Security
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    Taskk is equipped with advanced security protocols to keep
                    user data safe.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard Card */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 bg-warning bg-opacity-70 custom-shadow hover-scale">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Dashboard
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    Every user will get a personalised dashboard. It updates in
                    real-time after signup.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 bg-warning bg-opacity-90 custom-shadow hover-scale">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Pending
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    Pending tasks are updated daily and displayed for better
                    organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Score Card */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card h-100 custom-shadow hover-scale"
                style={{ backgroundColor: "rgb(62, 162, 60, 0.90)" }}
              >
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Daily Score
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    Users can analyze their daily work progress with real-time
                    updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Weekly Score Card */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 bg-info bg-opacity-90 custom-shadow hover-scale">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-center text-white mb-3 p-4">
                    Weekly Score
                  </h3>
                  <hr />
                  <p className="card-text text-center mt-auto p-4">
                    View performance analysis of the past 7 days to improve
                    productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-5">
              <div className="container">
                <div className="position-relative overflow-hidden rounded">
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0, 128, 0, 0.3), rgba(0, 100, 0, 0.3))",
                      backdropFilter: "blur(10px)",
                    }}
                  ></div>
                  <div className="position-relative text-center p-4 p-md-5">
                    <h2 className="display-5 fw-bold text-white mb-4">
                      Ready to Schedule Your Day?
                    </h2>
                    <p
                      className="text-light mb-4 mx-auto"
                      style={{ maxWidth: "600px" }}
                    >
                      Join us for a better experience in
                      <span className="text-warning"> Taskk</span> and start
                      shaping the future
                    </p>
                    <button className="btn btn-success px-4 py-2 fw-bold" onClick={()=>{
                      window.location.href="/signup"
                    }}>
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
