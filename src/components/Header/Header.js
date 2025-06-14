import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/reset-password'].includes(location.pathname.toLowerCase());
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const handleLogout = () => {
    // handle logout logic here
    localStorage.removeItem('authToken'); // Clear auth token
    window.location.href = '/login'; // Redirect to login page
    // Add your logout logic here
  };

  return (
    <header className="header">
      {/* Hamburger menu visible only on small screens */}
      {!isAuthPage && (
        <button className="menu-btn-header" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <h1 className="header-title">School Management</h1>

      {!isAuthPage && (
        <div
          className="profile-icon-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <div className="profile-icon">👤</div>
          {showDropdown && (
            <div className="custom-dropdown">
              <div className="arrow-up"></div>
              <ul className="dropdown-list">
                <li onClick={handleLogout}>
                  <span className="icon">🚪</span> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
