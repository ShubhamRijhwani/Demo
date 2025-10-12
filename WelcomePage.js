import React from "react";
import Navbar from "./Navbar"; // Importing the separate Navbar component
import "./WelcomePage.css"; // Styles for the main page content

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      
      {/* Navbar component call */}
      <Navbar /> 
      
      {/* Welcome Message */}
      <div className="welcome-message">
        <h1>Welcome to Standard Chartered Business Portal</h1>
        <p>Manage Payroll, Transactions, Approvals, and Account Details with ease.</p>
      </div>

      {/* Cards Section */}
      <div className="cards-grid">
        <div className="feature-card">
          <img src="https://source.unsplash.com/400x200/?payment" alt="feature" />
          <h3>Payroll Management</h3>
          <p>Manage and process employee payroll securely and efficiently.</p>
          <button className="learn-btn">Learn more</button>
        </div>
        <div className="feature-card">
          <img src="https://source.unsplash.com/400x200/?banking" alt="feature" />
          <h3>Transaction Overview</h3>
          <p>Track and analyze all your company’s transactions in one place.</p>
          <button className="learn-btn">Learn more</button>
        </div>
        <div className="feature-card">
          <img src="https://source.unsplash.com/400x200/?finance" alt="feature" />
          <h3>Approvals & Workflows</h3>
          <p>Approve or reject requests seamlessly with real-time notifications.</p>
          <button className="learn-btn">Learn more</button>
        </div>
        <div className="feature-card">
          <img src="https://source.unsplash.com/400x200/?money" alt="feature" />
          <h3>Account Balance</h3>
          <p>View, manage, and track your accounts with live balance updates.</p>
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;