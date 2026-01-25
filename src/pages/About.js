import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h2 className="about-title">About This Project</h2>
        <p className="about-subtitle">
          HR Management System is a full-stack web application designed to manage
          employee records efficiently and professionally.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Frontend</h3>
            <p>React.js</p>
          </div>

          <div className="about-card">
            <h3>Backend</h3>
            <p>Spring Boot</p>
          </div>

          <div className="about-card">
            <h3>Database</h3>
            <p>H2 (File-based)</p>
          </div>

          <div className="about-card">
            <h3>DevOps</h3>
            <p>Git, Docker, CI/CD (Planned)</p>
          </div>
        </div>

        <div className="about-footer">
          <p>
            This project demonstrates complete CRUD operations, RESTful APIs,
            clean UI design, and real-world enterprise practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;