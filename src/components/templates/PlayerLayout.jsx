import React, { useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';

export default function PlayerLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  const navLinks = [
    { to: '/home', label: 'Home', icon: 'fa-solid fa-house' },
    { to: '/profile', label: 'Profile', icon: 'fa-regular fa-user' },
    { to: '/settings', label: 'Settings', icon: 'fa-solid fa-gear' },
    { to: '/notifications', label: 'Notifications', icon: 'fa-regular fa-bell', badge: 1 },
    { to: '/my_bets', label: 'My bets', icon: 'fa-solid fa-dice' },
    { to: '/start_kyc', label: 'Start KYC', icon: 'fa-regular fa-circle-check' },
    { to: '/kyc_status_review', label: 'Verification status', icon: 'fa-solid fa-clock-rotate-left' }
  ];

  const isActiveLink = (to) => {
    if (to === '/start_kyc') {
      return ['/start_kyc', '/upload_id', '/proof_of_address'].some(p => location.pathname.includes(p));
    }
    return location.pathname.includes(to);
  };

  return (
    <div style={{ backgroundColor: '#090e17', color: '#ffffff', minHeight: '100vh' }}>
      <div className="app-wrapper">
        
        {/* Sidebar Menu (Desktop/PC View) */}
        <div className="sidebar">
          <div>
            {/* User Profile Header */}
            <div className="sidebar-user">
              <div className="avatar-circle">
                <img src="/img/user_avatar.jpg" alt="User Avatar" className="avatar-image" />
              </div>
              <div className="username-container">
                <span className="username-text">psarabia0190</span>
                <i className="fa-solid fa-chevron-right username-arrow"></i>
              </div>
            </div>

            {/* Navigation List */}
            <div className="sidebar-nav">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-item-link ${isActiveLink(item.to) ? 'active' : ''}`}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge" id="sidebarBadge">{item.badge}</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="sidebar-footer">
            <Link to="/" className="nav-item-link logout-link">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Log out</span>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="main-content"
          style={['/start_kyc', '/upload_id', '/proof_of_address', '/kyc_status_review'].some(p => location.pathname.includes(p)) ? { padding: '24px 20px' } : undefined}
        >
          
          {/* Mobile Header (Mobile only) */}
          <div className="mobile-header d-flex justify-content-between align-items-center mb-4 d-lg-none">
            <div className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }} onClick={toggleDrawer}>
              <div className="grid-menu-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="logo-text" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
                Digital Verify
              </div>
            </div>
            
            <div
              className="avatar-circle"
              style={{ width: '40px', height: '40px', border: '1.5px solid var(--winarena-primary)', background: 'none', margin: 0 }}
              onClick={toggleDrawer}
            >
              <img src="/img/user_avatar.jpg" alt="User Avatar" className="avatar-image" />
            </div>
          </div>

          {/* Child Outlet */}
          <Outlet />

        </div>

      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div id="mobileDrawer" className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="d-flex align-items-center gap-2">
            <div className="grid-menu-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="logo-text" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>Menu</span>
          </div>
          <button className="close-drawer-btn" onClick={closeDrawer}>&times;</button>
        </div>
        <div className="drawer-user">
          <div className="avatar-circle" style={{ width: '48px', height: '48px', border: '2px solid var(--winarena-primary)', background: 'none' }}>
            <img src="/img/user_avatar.jpg" alt="User Avatar" className="avatar-image" />
          </div>
          <div className="username-container">
            <span className="username-text">psarabia0190</span>
            <i className="fa-solid fa-chevron-right username-arrow"></i>
          </div>
        </div>
        <div className="drawer-nav">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`drawer-item ${isActiveLink(item.to) ? 'active' : ''}`}
              onClick={closeDrawer}
            >
              <i className={item.icon}></i> {item.label} {item.badge && <span className="nav-badge">{item.badge}</span>}
            </Link>
          ))}
          <hr style={{ borderColor: '#1f2a3f', margin: '15px 0' }} />
          <Link to="/" className="drawer-item logout" onClick={closeDrawer}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
          </Link>
        </div>
      </div>
      {isDrawerOpen && <div id="drawerOverlay" className="drawer-overlay show" onClick={closeDrawer}></div>}
    </div>
  );
}
