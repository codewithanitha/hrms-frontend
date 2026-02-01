import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [percentage, setPercentage] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://hrms-backend-abyl.onrender.com/api/employees");
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // 🔥 Open modal
  const openUpdateModal = (id) => {
    setSelectedId(id);
    setPercentage('');
    setShowModal(true);
  };

  // 🔥 Update salary
  const submitUpdate = async () => {
    if (!percentage) return;

    try {
      await axios.put(
        `https://hrms-backend-abyl.onrender.com/api/employees/${selectedId}?percentage=${percentage}`
      );
      setShowModal(false);
      fetchEmployees();
    } catch (error) {
      alert("Update failed");
    }
  };

  // 🔥 Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      await axios.delete(`https://hrms-backend-abyl.onrender.com/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div className="employees-wrapper">
      <div className="employees-container">
        <div className="employees-header">
          <h2 className="page-title">Employee List</h2>
          <button className="refresh-btn" onClick={fetchEmployees}>Refresh Data</button>
        </div>

        {loading ? (
          <p className="loading-text">Loading Employees...</p>
        ) : (
          <div className="table-responsive">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Salary</th>
                  <th>HRA</th>
                  <th>Electricity</th>
                  <th>Shopping</th>
                  <th>Total Expense</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.employeeName}</td>
                    <td>{emp.employeeRole}</td>
                    <td>₹{emp.salary}</td>
                    <td>₹{emp.hra}</td>
                    <td>₹{emp.electricity}</td>
                    <td>₹{emp.shopping}</td>
                    <td className="total-cell">
                      ₹{Number(emp.hra) + Number(emp.electricity) + Number(emp.shopping)}
                    </td>
                    <td>
                      <button className="update-btn" onClick={() => openUpdateModal(emp.id)}>
                        Update
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(emp.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 🔥 UPDATE MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Update Salary</h3>
            <input
              type="number"
              placeholder="Enter increment percentage"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            <div className="modal-actions">
              <button className="update-btn" onClick={submitUpdate}>Update</button>
              <button className="delete-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;