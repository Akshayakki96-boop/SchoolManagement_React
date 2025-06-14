import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed, toggleSidebar, isMobileOpen }) => {
  const handleLinkClick = () => {
    if (typeof toggleSidebar === 'function') {
      toggleSidebar();
    }
  };

  const handleClick = () => {
    // Clear any stored auth tokens or user info
    localStorage.removeItem('authToken');
    // Optionally, redirect to login or home
    window.location.href = '/login'; // or use navigate('/login') if using `react-router-dom` hook
  
    // Optionally, log or perform analytics
    console.log('User logged out');
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobileOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <aside
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${isMobileOpen ? 'open' : ''}`}
      >
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} onClick={handleLinkClick}>
                <span>🏠</span> {!collapsed && 'Dashboard'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} onClick={handleLinkClick}>
                <span>👨‍🏫</span> {!collapsed && 'Users'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} onClick={handleLinkClick}>
                <span>👩‍🎓</span> {!collapsed && 'Students'}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} >
                <span>⚙️</span> {!collapsed && 'Logout'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
