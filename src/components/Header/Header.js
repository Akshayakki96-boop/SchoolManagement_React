import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  // Import useLocation from react-router-dom
  const location = useLocation();
  const hideProfileIcon = location.pathname.toLowerCase() === '/login';

  return (
    <header className="header">
      <h1 className="header-title">School Management </h1>
      {!hideProfileIcon && (
        <div className="profile-icon">👤</div>
      )}
    </header>
  );
};

export default Header;
