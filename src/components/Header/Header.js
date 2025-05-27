import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const hideProfileIcon = location.pathname.toLowerCase() === '/login';

  return (
    <header className="header">
      {/* Hamburger menu visible only on small screens */}
      {!hideProfileIcon &&  (
        <button className="menu-btn-header" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <h1 className="header-title">School Management</h1>

      {!hideProfileIcon && (
        <div className="profile-icon">👤</div>
      )}
    </header>
  );
};

export default Header;
