import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>HRMS</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Employee</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;