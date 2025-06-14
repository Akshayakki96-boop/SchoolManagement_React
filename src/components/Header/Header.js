import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  debugger;
  const location = useLocation();
  const isAuthPage = ['/login', '/reset-password'].includes(location.pathname.toLowerCase());
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

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
          className="profile-icon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative'}}
        >
          👤
          {showDropdown && (
            <ul className="dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              listStyle: 'none',
              margin: 0,
              padding: '8px 0',
              minWidth: '120px',
              zIndex: 1000
            }}>
              <li style={{ padding: '8px 16px', cursor: 'pointer' }}>
                <a href="/logout" style={{ textDecoration: 'none', color: '#333',cursor:'pointer' }}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
