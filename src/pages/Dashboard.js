import React, { Component, createRef } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css';
import axios from 'axios';
import withNavigation from '../withNavigation';
import Swal from "sweetalert2";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.lineChartRef = createRef();
    this.donutChartRef = createRef();
    this.lineChart = null;
    this.donutChart = null;
  }

  componentDidMount() {
    // Line Chart
    this.lineChart = new Chart(this.lineChartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Students',
            data: [100, 200, 250, 300, 400],
            backgroundColor: 'rgba(66, 133, 244, 0.2)',
            borderColor: '#4285f4',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: { responsive: true },
    });

    // Donut Chart
    this.donutChart = new Chart(this.donutChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: ['#4285f4', '#34a853', '#fbbc05'],
          },
        ],
      },
      options: { responsive: true, cutout: '60%' },
    });
    this.getUserData();
  }
  getUserData = () => {
        const baseUrl = process.env.REACT_APP_BASEURL;
        const Url = `${baseUrl}/api/Student/Dashboard`;
    
        axios.post(Url, "", {
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        })
          .then((response) => {
            console.log('Dashboard Data:', response.data);
            this.setState({ userName: response.data.data.username || 'User' });
            // Process and update charts with the response data if needed  
    
          })
          .catch((error) => {
            console.error('Error fetching dashboard data:', error.response?.data || error.message);
            if(error.response && error.response.status === 401) {
              // Handle unauthorized access, e.g., redirect to login
              this.props.navigate('/login');
            }
            else
            {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'An error occurred while fetching dashboard data.',
              });
            }
            // Handle error appropriately, e.g., show an alert or log the error
          });
  }

  componentWillUnmount() {
    // 🧹 Clean up charts before unmounting
    if (this.lineChart) {
      this.lineChart.destroy();
    }
    if (this.donutChart) {
      this.donutChart.destroy();
    }
  }

  render() {
    return (
      <div className="dashboard-content">
       <section className="cards">
          <div className="card">
            <h3 style={{textAlign:'left'}}>Welcome,  {this.state.userName}</h3>
          </div>
        </section>
        <section className="cards">
          <div className="card">
            <h3>Students</h3>
            <p>113</p>
          </div>
          <div className="card">
            <h3>Teachers</h3>
            <p>110</p>
          </div>
        </section>

        <section className="charts">
          <div className="chart-box">
            <h4>Students Over Time</h4>
            <canvas ref={this.lineChartRef}></canvas>
          </div>
          <div className="chart-box">
            <h4>Teacher Categories</h4>
            <canvas ref={this.donutChartRef}></canvas>
          </div>
        </section>
      </div>
    );
  }
}

export default withNavigation(Dashboard);
