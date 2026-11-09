import React from 'react';

export default function ProfilePage() {
  return (
    <div className="container-fluid p-0" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Heading */}
      <div className="d-flex align-items-center gap-3 mb-2">
        <span style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-regular fa-user"></i></span>
        <h3 className="fw-bold text-white mb-0">Profile</h3>
      </div>
      <p className="text-muted small mb-4">Manage your account settings and preferences.</p>

      {/* Profile Header Details Card */}
      <div className="profile-header-card">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div className="profile-avatar-wrapper">
            <img src="/img/user_avatar.jpg" alt="User Avatar" className="profile-avatar-img" />
            <div className="avatar-edit-btn" onClick={() => alert('Change avatar function coming soon.')}><i className="fa-solid fa-pencil"></i></div>
          </div>
          <div>
            <span className="text-uppercase" style={{ fontSize: '10px', color: 'var(--winarena-primary)', fontWeight: 700, letterSpacing: '0.8px' }}>Username</span>
            <h3 className="fw-bold text-white mb-1" style={{ fontSize: '24px' }}>psarabia0190</h3>
            <span className="text-muted small">Member since May 20, 2026</span>
          </div>
        </div>

        {/* Statuses Row */}
        <div className="d-flex gap-4 border-start border-secondary border-opacity-25 ps-4" style={{ minWidth: '250px' }}>
          <div>
            <span className="text-muted small text-uppercase d-block" style={{ fontSize: '10px', letterSpacing: '0.5px', marginBottom: '5px' }}>Account Status</span>
            <span className="text-danger fw-bold d-flex align-items-center gap-2" style={{ fontSize: '14px' }}><i className="fa-solid fa-circle-xmark"></i> Suspended</span>
          </div>
          <div>
            <span className="text-muted small text-uppercase d-block" style={{ fontSize: '10px', letterSpacing: '0.5px', marginBottom: '5px' }}>Account Level</span>
            <span className="fw-bold d-flex align-items-center gap-2" style={{ fontSize: '14px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-shield-halved"></i> Unranked</span>
          </div>
        </div>
      </div>

      {/* Action Lists */}
      
      {/* 1. Update Username */}
      <div className="profile-action-row">
        <div className="d-flex align-items-center gap-3">
          <div className="profile-action-icon-box"><i className="fa-regular fa-user"></i></div>
          <div>
            <h6 className="fw-bold text-white mb-1" style={{ fontSize: '14px' }}>Update Username</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Change your username. This is how other users will see you on the platform.</span>
          </div>
        </div>
        <button className="profile-outline-btn" onClick={() => alert('Function coming soon.')}>Update Username <i className="fa-solid fa-arrow-right"></i></button>
      </div>

      {/* 2. Change Password */}
      <div className="profile-action-row">
        <div className="d-flex align-items-center gap-3">
          <div className="profile-action-icon-box"><i className="fa-solid fa-lock"></i></div>
          <div>
            <h6 className="fw-bold text-white mb-1" style={{ fontSize: '14px' }}>Change Password</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Update your password regularly to keep your account secure.</span>
          </div>
        </div>
        <button className="profile-outline-btn" onClick={() => alert('Function coming soon.')}>Change Password <i className="fa-solid fa-arrow-right"></i></button>
      </div>

      {/* 3. Link Steam Account */}
      <div className="profile-action-row">
        <div className="d-flex align-items-center gap-3">
          <div className="profile-action-icon-box"><i className="fa-brands fa-steam"></i></div>
          <div>
            <h6 className="fw-bold text-white mb-1" style={{ fontSize: '14px' }}>Link Steam Account</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Link your Steam account to unlock features and verify your gaming identity.</span>
          </div>
        </div>
        <button className="profile-outline-btn" onClick={() => alert('Steam integration coming soon.')}>Link Steam Account <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}
