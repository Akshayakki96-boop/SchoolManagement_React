import React, { Component } from 'react';
import './AddUser.css';
import Swal from "sweetalert2";
import axios from 'axios';
import withNavigation from '../../withNavigation';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
    };
  }
  validateForm = () => {
    const { username, email, role, password, confirmPassword } = this.state;
    return (
      username.trim() !== '' &&
      email.trim() !== '' &&
      role !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== ''
      && password === confirmPassword // Ensure passwords match
    );
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { username, email, role, password, confirmPassword } = this.state;
    this.setState({ keepSpinner: true });
    const baseUrl = process.env.REACT_APP_BASEURL;
    const Url = `${baseUrl}/api/Signup/Signup`;
    const userData = {
      "username": username,
      "email": email,
      "user_role": role,
      "password": btoa(password), // Encoding password
      "confirmPassword": btoa(confirmPassword) // Encoding confirm password
    };

    axios.post(Url, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        this.setState({ keepSpinner: false });
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'User added successfully',
          confirmButtonText: 'OK'
        }).then(() => {
          this.props.navigate('/users');
        });

      })
      .catch((error) => {
        console.error('Signup Error:', error.response?.data || error.message);
        this.setState({ keepSpinner: false });
        if (error.response && error.response.status === 401) {
          // Handle unauthorized access, e.g., redirect to login
          this.props.navigate('/login');
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'Something went wrong !',
          });
        }
        // Handle error appropriately, e.g., show an alert or log the error
      });
  };

  render() {
    const validateForm = this.validateForm();
    return (
      <div className="full-page-form">

        <div className="form-wrapper">
          {this.state.keepSpinner && <div className="custom-loader">
            <div className="loader-spinner"></div>
            <p className="loader-text">Please Wait...</p>
          </div>}
          <h1 className="form-title">Add User</h1>

          <form onSubmit={this.handleSubmit} className="user-form">
            <div className="form-row">
              <div className="form-group">
                <label>UserName*</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Enter username"
                />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Role*</label>
                <select
                  name="role"
                  value={this.state.role}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select role</option>
                  <option value="1">Admin</option>
                  <option value="2">Staff</option>
                </select>
              </div>
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="form-row">


              <div className="form-group">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  placeholder="Confirm password"
                />
                {this.state.confirmPassword && this.state.password !== this.state.confirmPassword && (
                  <div style={{ color: 'red', fontSize: '0.9em', marginTop: '4px' }}>
                    Passwords do not match
                  </div>
                )}
              </div>

            </div>

            <div className="form-actions">
              <button type="button" className="submit-btn" disabled={!validateForm} onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withNavigation(AddUser);