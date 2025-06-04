import React, { Component } from 'react';
import './AddStudent.css'; // Assuming you have a CSS file for styling

class AddStudent extends Component {
  constructor(props) {
    super(props);
   this.state = {
  name: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  selectedClass: '',
  guardianName: '',
  guardianPhone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  enrollmentType: '',
  prevSchool: '',
  photo: null,
  birthCert: null,
  medical: '',
  contactMethod: ''
};

  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // Submit logic here
  };

  render() {
    return (
      <div className="full-page-form">
        <div className="form-wrapper">
          <h1 className="form-title">Add Student</h1>
        {/* Student Admission Form */}
        <p className="form-description">
            Please fill out all required fields to add a new student.
        </p>
         <form onSubmit={this.handleSubmit} className="user-form">
  {/* Row 1: Name, Email */}
  <div className="form-row">
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleInputChange}
        placeholder="Enter name"
        required
      />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={this.state.email}
        onChange={this.handleInputChange}
        placeholder="Enter email"
        required
      />
    </div>
  </div>

  {/* Row 2: Phone, Date of Birth */}
  <div className="form-row">
    <div className="form-group">
      <label>Phone</label>
      <input
        type="tel"
        name="phone"
        value={this.state.phone}
        onChange={this.handleInputChange}
        placeholder="Enter phone number"
        required
      />
    </div>

    <div className="form-group">
      <label>Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={this.state.dob}
        onChange={this.handleInputChange}
        required
      />
    </div>
  </div>

  {/* Row 3: Gender, Class */}
  <div className="form-row">
    <div className="form-group">
      <label>Gender</label>
      <select
        name="gender"
        value={this.state.gender}
        onChange={this.handleInputChange}
        required
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label>Class</label>
      <select
        name="selectedClass"
        value={this.state.selectedClass}
        onChange={this.handleInputChange}
        required
      >
        <option value="">Select class</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
        <option value="4">Class 4</option>
        <option value="5">Class 5</option>
        {/* Add more if needed */}
      </select>
    </div>
  </div>

  {/* Row 4: Parent/Guardian Info */}
  <div className="form-row">
    <div className="form-group">
      <label>Parent/Guardian Name</label>
      <input
        type="text"
        name="guardianName"
        value={this.state.guardianName}
        onChange={this.handleInputChange}
        placeholder="Enter guardian name"
        required
      />
    </div>

    <div className="form-group">
      <label>Guardian Contact</label>
      <input
        type="tel"
        name="guardianPhone"
        value={this.state.guardianPhone}
        onChange={this.handleInputChange}
        placeholder="Enter guardian contact number"
        required
      />
    </div>
  </div>

  {/* Row 5: Address, City */}
  <div className="form-row">
    <div className="form-group">
      <label>Address</label>
      <textarea
       style={{ width: '100%' }}
        rows="4"
        name="address"
        value={this.state.address}
        onChange={this.handleInputChange}
        placeholder="Enter address"
        required
      ></textarea>
    </div>

    <div className="form-group">
      <label>City</label>
      <input
        type="text"
        name="city"
        value={this.state.city}
        onChange={this.handleInputChange}
        placeholder="Enter city"
        required
      />
    </div>
  </div>

  {/* Row 6: State, Zip */}
  <div className="form-row">
    <div className="form-group">
      <label>State</label>
      <select
        name="state"
        value={this.state.state}
        onChange={this.handleInputChange}
        required
      >
        <option value="">Select state</option>
        <option value="UP">Uttar Pradesh</option>
        <option value="MH">Maharashtra</option>
        <option value="DL">Delhi</option>
        {/* Add more states */}
      </select>
    </div>

    <div className="form-group">
      <label>Zip Code</label>
      <input
        type="text"
        name="zip"
        value={this.state.zip}
        onChange={this.handleInputChange}
        placeholder="Enter zip code"
        required
      />
    </div>
  </div>

  {/* Row 7: Enrollment Type, Previous School */}
  <div className="form-row">
    <div className="form-group">
      <label>Enrollment Type</label>
      <select
        name="enrollmentType"
        value={this.state.enrollmentType}
        onChange={this.handleInputChange}
        required
      >
        <option value="">Select type</option>
        <option value="new">New Admission</option>
        <option value="transfer">Transfer</option>
      </select>
    </div>

    <div className="form-group">
      <label>Previous School Name</label>
      <input
        type="text"
        name="prevSchool"
        value={this.state.prevSchool}
        onChange={this.handleInputChange}
        placeholder="Enter previous school name"
      />
    </div>
  </div>

  {/* Row 8: Upload Photo & Birth Certificate */}
  <div className="form-row">
    <div className="form-group">
      <label>Upload Photo</label>
      <input
        type="file"
        name="photo"
        onChange={this.handleFileChange}
        accept="image/*"
        required
      />
    </div>

    <div className="form-group">
      <label>Upload Birth Certificate</label>
      <input
        type="file"
        name="birthCert"
        onChange={this.handleFileChange}
        accept="image/*,application/pdf"
        required
      />
    </div>
  </div>

  {/* Row 9: Medical Condition, Preferred Contact */}
  <div className="form-row">
    <div className="form-group">
      <label>Medical Conditions</label>
      <textarea
        name="medical"
        style={{ width: '100%' }}
        rows="4"
        value={this.state.medical}
        onChange={this.handleInputChange}
        placeholder="Mention allergies or health issues"
      ></textarea>
    </div>

    <div className="form-group">
      <label>Preferred Contact Method</label>
      <div>
        <label><input type="radio" name="contactMethod" value="email" checked={this.state.contactMethod === 'email'} onChange={this.handleInputChange} /> Email</label>
        <label><input type="radio" name="contactMethod" value="phone" checked={this.state.contactMethod === 'phone'} onChange={this.handleInputChange} /> Phone</label>
        <label><input type="radio" name="contactMethod" value="sms" checked={this.state.contactMethod === 'sms'} onChange={this.handleInputChange} /> SMS</label>
      </div>
    </div>
  </div>

  {/* Submit */}
  <div className="form-actions">
    <button type="submit" className="submit-btn">Submit</button>
  </div>
</form>

        </div>
      </div>
    );
  }
}

export default AddStudent;