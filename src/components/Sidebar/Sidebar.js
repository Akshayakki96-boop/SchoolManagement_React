import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ collapsed, toggleSidebar, isMobileOpen }) => {
  const handleLinkClick = () => {
    if (typeof toggleSidebar === 'function') {
      toggleSidebar();
    }
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
                <span>👩‍🎓</span> {!collapsed && 'Users'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/teachers" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} onClick={handleLinkClick}>
                <span>👨‍🏫</span> {!collapsed && 'Teachers'}
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} onClick={handleLinkClick}>
                <span>⚙️</span> {!collapsed && 'Settings'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
