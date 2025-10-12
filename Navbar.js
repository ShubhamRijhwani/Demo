import React from "react";
import { Link } from 'react-router-dom'; // 👈 Import Link
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* The logo/home link would typically use <Link> too */}
        <Link to="/" className="bank-logo-link">
          <img src="/logo.png" alt="Bank Logo" className="bank-logo" />
        </Link>
        <Link to="/" className="home-icon">🏠</Link>
        
        {/* Payroll Dropdown */}
        <div className="nav-item dropdown">
          Payroll
          <div className="dropdown-content">
            {/* Using Link component for navigation */}
            <Link to="/payroll/list1" className="dropdown-item">List 1</Link>
            <Link to="/payroll/list2" className="dropdown-item">List 2</Link>
            <Link to="/payroll/list3" className="dropdown-item">List 3</Link>
          </div>
        </div>
        
        {/* Transactions Dropdown */}
        <div className="nav-item dropdown">
          Transactions
          <div className="dropdown-content">
            {/* Using Link component for navigation */}
            <Link to="/transactions/list1" className="dropdown-item">List 1</Link>
            <Link to="/transactions/list2" className="dropdown-item">List 2</Link>
            <Link to="/transactions/list3" className="dropdown-item">List 3</Link>
          </div>
        </div>
        
        {/* Account Balance Dropdown */}
        <div className="nav-item dropdown">
          Account Balance
          <div className="dropdown-content">
            {/* Using Link component for navigation */}
            <Link to="/balance/list1" className="dropdown-item">List 1</Link>
            <Link to="/balance/list2" className="dropdown-item">List 2</Link>
            <Link to="/balance/list3" className="dropdown-item">List 3</Link>
          </div>
        </div>
        
        {/* Approvals Dropdown */}
        <div className="nav-item dropdown">
          Approvals
          <div className="dropdown-content">
            {/* Using Link component for navigation */}
            <Link to="/approvals/list1" className="dropdown-item">List 1</Link>
            <Link to="/approvals/list2" className="dropdown-item">List 2</Link>
            <Link to="/approvals/list3" className="dropdown-item">List 3</Link>
          </div>
        </div>
      </div>

      <div className="navbar-right">
        {/* Sign Out button might trigger an action or redirect */}
        <button className="signout-btn">Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;