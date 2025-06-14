import React, { Component } from 'react';
import './ResetPassword.css';
import loginImage from '../../assets/teacher-board.jpg'; // Replace with correct path to image
import logo from '../../assets/Kubra-Logo.svg'; // Replace with correct path to logo
import axios from 'axios';
import withNavigation from '../../withNavigation'; // Assuming you have a HOC for navigation
import Swal from "sweetalert2";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

  };
  validateForm = () => {
    const { username, password } = this.state;
    return username.trim() !== '' && password.trim() !== '';
  };

  handleSubmit = async () => {
    const { username, password } = this.state;
    this.setState({ keepSpinner: true });
    const baseUrl = process.env.REACT_APP_BASEURL;
    const loginUrl = `${baseUrl}/api/Login/login`;
    const loginData = {
      "username": username,
      "password": btoa(password),
    };

    axios.post(loginUrl, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Login Success:', response.data);
        this.setState({ keepSpinner: false });
        localStorage.setItem('authToken', response.data.token);


        this.props.navigate('/dashboard'); // Use `navigate`


      })
      .catch((error) => {
        console.error('Signup Error:', error.response?.data || error.message);
        this.setState({ keepSpinner: false });
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.response?.data?.message || 'An error occurred during login.',
        });
      });
  }
  render() {
    const validateForm = this.validateForm();
    return (
      <div className="login-page">
       
        {this.state.keepSpinner && <div class="custom-loader">
          <div class="loader-spinner"></div>
          <p class="loader-text">Please Wait...</p>
        </div>}

        
        <div className="login-left">
           
          <div className="login-box">
            <img src={logo} alt="Logo" className="login-logo" />
            <h2>Reset Password</h2>
            <div className="input-group">
              <div className="input-wrapper">
                <input type="text" placeholder="Username" name="username" onChange={this.handleInputChange} />
                <span className="input-icon">📧</span>
              </div>
            </div>
            <div className="input-group">
              <div className="input-wrapper">
                <input type="password" placeholder="Password" name="password" onChange={this.handleInputChange} />
                <span className="input-icon">🔒</span>
              </div>
            </div>
            <button type="button" className="signin-btn" disabled={!validateForm} onClick={this.handleSubmit} >Submit</button>
          </div>
        </div>
        <div className="login-right">
          <img src={loginImage} alt="Login Background" />
        </div>
      </div>
    );
  }
}

export default withNavigation(ResetPassword);
