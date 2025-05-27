import React, { Component } from 'react';
import './Login.css';
import loginImage from '../../assets/teacher-board.jpg'; // Replace with correct path to image
import logo from '../../assets/Kubra-Logo.svg'; // Replace with correct path to logo

class LoginForm extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-left">
          <div className="login-box">
            <img src={logo} alt="Logo" className="login-logo" />
            <h2>Admin Login</h2>
          <div className="input-group">
  <div className="input-wrapper">
    <input type="text" placeholder="Username" />
    <span className="input-icon">📧</span>
  </div>
</div>
<div className="input-group">
  <div className="input-wrapper">
    <input type="password" placeholder="Password" />
    <span className="input-icon">🔒</span>
  </div>
</div>
            <button className="signin-btn">Sign In</button>
            <a href="#" className="forgot-password">🔑 Forgot Password?</a>
          </div>
        </div>
        <div className="login-right">
          <img src={loginImage} alt="Login Background" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
