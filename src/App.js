import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './pages/Dashboard';
import Users from './components/Users/Users';
import AddUser from './components/Users/AddUser';
import LoginForm from './components/Login/LoginForm';
import Students from './components/Students/Students';
import AddStudent from './components/Students/AddStudent';

// HOC to inject location
const withLocation = (Component) => {
  return (props) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      isMobileOpen: false,
    };
  }

  toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      // Mobile behavior
      this.setState((prevState) => ({
        isMobileOpen: !prevState.isMobileOpen,
      }));
    } else {
      // Desktop behavior
      this.setState((prevState) => ({
        isCollapsed: !prevState.isCollapsed,
      }));
    }
  };

  render() {
    const { location } = this.props;
    const { isCollapsed, isMobileOpen } = this.state;
    const isLoginPage = location.pathname.toLowerCase() === '/login';

    if (isLoginPage) {
      return (
        <div className="app-container">
          <Header />
          <div className="main-content" style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </div>
      );
    }

    return (
      <div className="app-container">
        <Header toggleSidebar={this.toggleSidebar} />
        <div className="main-section" style={{ display: 'flex' }}>
          <Sidebar
            collapsed={isCollapsed}
            toggleSidebar={this.toggleSidebar}
            isMobileOpen={isMobileOpen}
          />
          <div
            className="main-content"
            style={{ flex: 1, padding: '20px' }}
            onClick={() => {
              if (isMobileOpen) this.setState({ isMobileOpen: false });
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/add-user" element={<AddUser />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/add-student" element={<AddStudent />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const LayoutWithLocation = withLocation(Layout);

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutWithLocation />
      </Router>
    );
  }
}

export default App;
