import React, { useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';

export default function BackofficeLayout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(prev => !prev);
  };

  const navLinks = [
    { to: '/dashboard', label: 'Verification Dashboard', icon: 'fa-solid fa-table-columns' },
    { to: '/queue', label: 'Verification Queue', icon: 'fa-solid fa-list-check' },
    { to: '/all-cases', label: 'All Cases', icon: 'fa-solid fa-folder-open' },
    { to: '/reports', label: 'Reports', icon: 'fa-solid fa-chart-simple' },
    { to: '/settings_employee', label: 'Settings', icon: 'fa-solid fa-gear' },
    { to: '/activity_log', label: 'Activity Log', icon: 'fa-solid fa-clock-rotate-left' }
  ];

  return (
    <div className="employee-body" style={{ backgroundColor: 'var(--winarena-bg)', color: 'var(--winarena-text)', overflow: 'hidden', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <div className="backoffice-top-navbar">
        <div className="d-flex align-items-center gap-2">
          <Link to="/dashboard" className="d-flex align-items-center gap-2 text-decoration-none">
            <img src="/img/logo.svg" alt="Digital Verify" width="24" height="32" />
            <span className="logo-text fw-bold text-white fs-5" style={{ letterSpacing: '0.5px' }}>Digital Verify</span>
            <span className="badge ms-2" style={{ backgroundColor: 'var(--winarena-bg-purple-dark)', color: 'var(--winarena-primary-hover)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '4px 8px' }}>
              Backoffice
            </span>
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* Notification Bell */}
          <button
            type="button"
            className="position-relative cursor-pointer text-muted fs-5 border-0 bg-transparent p-0"
            title="Notifications"
            onClick={() => setNotificationsOpen(true)}
          >
            <i className="fa-regular fa-bell"></i>
            <span id="headerBellBadge" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '9px', padding: '3px 6px' }}>
              3
            </span>
          </button>

          <hr style={{ width: '1px', height: '24px', backgroundColor: 'var(--winarena-border)', border: 'none', margin: '0 10px' }} />

          {/* User Dropdown */}
          <div className="position-relative" id="userProfileDropdownContainer">
            <div className="d-flex align-items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
              <img
                src="/img/employee_avatar.png"
                alt="Paola Castro"
                className="avatar-image"
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid var(--winarena-primary)' }}
              />
              <div className="d-flex flex-column align-items-start text-start d-none d-sm-block">
                <span className="text-white fw-bold" style={{ fontSize: '13px', lineHeight: 1.2 }}>Paola Castro</span>
                <span className="text-muted" style={{ fontSize: '11px', lineHeight: 1.2 }}>Internal User</span>
              </div>
              <span className="text-muted small ms-1"><i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i></span>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div id="userProfileDropdown" className="user-dropdown-menu" style={{ display: 'block' }}>
                <div className="px-3 py-2 border-bottom border-secondary border-opacity-25 mb-1">
                  <span className="text-white fw-bold d-block small">Paola Castro</span>
                  <span className="text-muted" style={{ fontSize: '11px' }}>@psarabia • Backoffice</span>
                </div>
                <Link to="/login_employee" className="user-dropdown-item danger-item" onClick={() => setDropdownOpen(false)}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* App Main Body wrapper */}
      <div className="app-wrapper" style={{ flex: 1, height: 'calc(100vh - 57px)', overflow: 'hidden' }}>
        
        {/* Sidebar Menu (Desktop/PC View) */}
        <div className="sidebar" style={{ backgroundColor: '#070a14', borderRight: '1px solid var(--winarena-border)' }}>
          <div className="sidebar-nav pt-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content" style={{ padding: '24px 30px', overflowY: 'auto', height: '100%' }}>
          <Outlet />
        </div>

      </div>

      {/* Notifications Modal */}
      {notificationsOpen && (
        <div className="vr-popup-overlay" style={{ display: 'flex' }} onClick={() => setNotificationsOpen(false)}>
          <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <div className="card-login position-relative p-4">
              <button className="vr-close-btn" onClick={() => setNotificationsOpen(false)}>&times;</button>
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="fa-regular fa-bell" style={{ color: 'var(--winarena-primary-hover)' }}></i>
                <h5 className="text-white fw-bold mb-0" style={{ fontSize: '16px' }}>Notifications</h5>
              </div>
              <div className="notification-item p-3 mb-2 rounded" style={{ backgroundColor: 'rgba(118, 51, 239, 0.08)', border: '1px solid var(--winarena-border)' }}>
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-white fw-bold small">High Risk Verification Alert</span>
                  <span className="text-muted" style={{ fontSize: '10px' }}>10m ago</span>
                </div>
                <p className="text-muted small mb-0">Case DV-1023 was flagged for face mismatch.</p>
              </div>
              <div className="notification-item p-3 mb-2 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--winarena-border)' }}>
                <div className="d-flex justify-content-between mb-1">
                  <span className="text-white fw-bold small">Queue Threshold Met</span>
                  <span className="text-muted" style={{ fontSize: '10px' }}>1h ago</span>
                </div>
                <p className="text-muted small mb-0">Pending verification queue reached 12 cases.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
