import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather data from the 6 input fields in your form
    const employeeData = {
  employeeName: e.target[0].value,
  employeeRole: e.target[1].value,
  salary: parseFloat(e.target[2].value),
  hra: parseFloat(e.target[3].value),
  electricity: parseFloat(e.target[4].value),
  shopping: parseFloat(e.target[5].value)
};

    try {
      const response = await fetch("http://localhost:8080/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        setShowPopup(true); // Success popup
        setTimeout(() => setShowPopup(false), 3000);
        e.target.reset(); 
      } else {
        alert("❌ Server Error: Check if your Entity fields match these names.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("❌ Cannot reach Backend. Make sure Spring Boot is running on port 8080.");
    }
  };
  return (
    <div className="add-employee-wrapper">
      {/* Professional Success Popup */}
      {showPopup && (
        <div className="custom-popup">
          <div className="popup-content">
            <span className="check-icon">✅</span>
            <p>Employee Added Successfully!</p>
          </div>
        </div>
      )}

      <div className="add-employee-container">
        <h2 className="page-title">Add Employee</h2>
        
        <form className="employee-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Employee Name</label>
              <input type="text" placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <label>Employee Role</label>
              <input type="text" placeholder="Enter role" required />
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input type="number" placeholder="Enter salary" required />
            </div>
            <div className="form-group">
              <label>House Rent Allowance</label>
              <input type="number" placeholder="Enter HRA" required />
            </div>
            <div className="form-group">
              <label>Electricity</label>
              <input type="number" placeholder="Enter amount" required />
            </div>
            <div className="form-group">
              <label>Shopping</label>
              <input type="number" placeholder="Enter amount" required />
            </div>
          </div>
          
          <button type="submit" className="submit-btn">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;