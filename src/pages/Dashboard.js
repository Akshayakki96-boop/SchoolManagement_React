import React, { Component, createRef } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
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
            <h3>Students</h3>
            <p>1,320</p>
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

export default Dashboard;
