// App.js
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
// import Students from './pages/Students';
// import Teachers from './pages/Teachers';
// import Settings from './pages/Settings';
// import Login from './pages/Login';

// HOC to inject `location` into class component
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
    };
  }

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const { location } = this.props;
    const { isCollapsed } = this.state;
    const isLoginPage = location.pathname === '/login';

    return (
      <div className="app-container">
      <Header /> {/* Always on top */}
      
      <div className="main-section" style={{ display: 'flex' }}>
        <Sidebar
          collapsed={isLoginPage ? false : isCollapsed}
          toggleSidebar={!isLoginPage ? this.toggleSidebar : undefined}
        />
        
        <div className="main-content" style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* other routes */}
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
