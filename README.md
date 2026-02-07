# HRMS Frontend – React Application

This repository contains the **frontend implementation** of the HR Management System (HRMS).
The frontend provides a user-friendly interface to manage employee records and communicates
with the backend using RESTful APIs.

This project also demonstrates **DevOps practices** such as Dockerization, CI/CD pipelines,
code quality analysis, and cloud deployment.

## Project Description

The HRMS Frontend is built using **React.js** to provide an interactive and responsive user interface
for managing employee information. Users can add new employees, view employee details,
update salary information, and delete employee records.

The frontend is integrated with a **Spring Boot backend** deployed on Render and is
deployed on **Vercel** with automatic deployment enabled from GitHub.

## Technologies Used

### Frontend Technologies
- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- Axios & Fetch API

### DevOps & Tools
- Docker
- GitHub
- GitHub Actions (CI/CD)
- SonarQube (Code Quality Analysis)
- Vercel (Cloud Deployment)

## Frontend Modules

### Add Employee Module
- Form to add new employee details
- Client-side validation
- Success and error popups
- Sends POST request to backend API

### Employee List Module
- Displays list of all employees
- Update salary using percentage increment
- Delete employee functionality

### API Integration Module
- REST API communication with backend
- Handles GET, POST, PUT, DELETE operations
- Error handling for API failures

## CI/CD Pipeline – GitHub Actions
A CI/CD pipeline is implemented using GitHub Actions.

### CI/CD Workflow

- Code pushed to GitHub repository
- GitHub Actions workflow triggered
- Dependencies installed
- Build and code quality checks executed
- Deployment triggered automatically

## Backend API Integration

The frontend communicates with the backend using REST APIs.

## Docker Implementation (Frontend)

The frontend application is containerized using **Docker** to ensure consistency across environments.

### Docker Features
- Lightweight Docker image
- Easy deployment
- Environment independent execution

  <img width="1920" height="1080" alt="Screenshot 2026-01-31 184002" src="https://github.com/user-attachments/assets/c6d2fb83-ec3f-4198-a7a8-2e4a1846b084" />
  
  <img width="1920" height="1080" alt="Screenshot 2026-01-31 190042" src="https://github.com/user-attachments/assets/9451372a-a48e-4c83-b888-4917ef29cf1b" />

## SonarQube
SonarQube is used to analyze the frontend code quality.

- SonarQube Features
- Static code analysis
- Detection of bugs and code smells
- Ensures maintainable and clean code

  <img width="1920" height="1080" alt="Screenshot 2026-02-07 194051" src="https://github.com/user-attachments/assets/c5c16943-517a-4e59-9330-927747e66689" />

### Deployment URL

https://hrms-frontend-alpha-five.vercel.app
