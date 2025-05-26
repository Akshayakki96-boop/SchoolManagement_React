import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <h1 className="header-title">Admin Dashboard</h1>
      <div className="profile-icon">👤</div>
    </header>
    
  );
};

export default Header;
