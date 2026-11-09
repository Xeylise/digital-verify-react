import React, { useState } from 'react';

export default function SettingsEmployeePage() {
  const [fullName, setFullName] = useState('Paola Castro');
  const [email, setEmail] = useState('paola.castro@digitalverify.app');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('utc-8');
  const [systemNotif, setSystemNotif] = useState(true);

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword) {
      alert('Please fill out both current and new password.');
      return;
    }
    alert('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div style={{ padding: '30px', overflowY: 'auto', height: '100%' }}>
      <div className="container-fluid p-0" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Page Title Row */}
        <div className="text-start mb-4">
          <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>Settings</h2>
          <p className="text-muted small mb-0">Manage your account preferences, security settings, and system notifications.</p>
        </div>

        {/* Settings Grid Layout (2 columns) */}
        <div className="row g-4 text-start">
          {/* Left Column: User Profile & Security */}
          <div className="col-lg-7 d-flex flex-column gap-4">
            {/* USER PROFILE CARD */}
            <div className="settings-emp-card">
              <div className="settings-emp-card-header">
                <i className="fa-regular fa-user"></i> USER PROFILE
              </div>
              
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="settings-emp-label">Full Name</label>
                  <div className="settings-input-group">
                    <i className="fa-regular fa-user settings-input-icon"></i>
                    <input
                      type="text"
                      className="settings-emp-input has-icon"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="settings-emp-label">Email Address</label>
                  <div className="settings-input-group">
                    <i className="fa-regular fa-envelope settings-input-icon"></i>
                    <input
                      type="email"
                      className="settings-emp-input has-icon"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12">
                  <label className="settings-emp-label">Role & Permissions</label>
                  <div className="settings-input-group">
                    <i className="fa-solid fa-shield-halved settings-input-icon"></i>
                    <input
                      type="text"
                      className="settings-emp-input has-icon"
                      value="Lead Auditor (Backoffice Access)"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECURITY CARD */}
            <div className="settings-emp-card">
              <div className="settings-emp-card-header">
                <i className="fa-solid fa-lock"></i> SECURITY
              </div>

              <div>
                <h6 className="text-white fw-bold mb-3" style={{ fontSize: '13px' }}>Password Management</h6>
                
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="settings-emp-label">Current Password</label>
                    <div className="settings-input-group">
                      <i className="fa-solid fa-key settings-input-icon"></i>
                      <input
                        type="password"
                        id="currentPasswordInput"
                        className="settings-emp-input has-icon"
                        placeholder="••••••••"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="settings-emp-label">New Password</label>
                    <div className="settings-input-group">
                      <i className="fa-solid fa-shield-halved settings-input-icon"></i>
                      <input
                        type="password"
                        id="newPasswordInput"
                        className="settings-emp-input has-icon"
                        placeholder="New secure password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-end pt-1">
                  <button type="button" className="btn-update-password" onClick={handleUpdatePassword}>
                    <i className="fa-solid fa-arrow-up-from-bracket"></i> UPDATE PASSWORD
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: System Preferences & Notifications */}
          <div className="col-lg-5 d-flex flex-column gap-4">
            {/* SYSTEM PREFERENCES CARD */}
            <div className="settings-emp-card">
              <div className="settings-emp-card-header">
                <i className="fa-solid fa-sliders"></i> SYSTEM PREFERENCES
              </div>

              <div className="mb-3">
                <label className="settings-emp-label">Language</label>
                <div className="settings-input-group">
                  <i className="fa-solid fa-globe settings-input-icon"></i>
                  <select
                    className="settings-emp-select has-icon"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="en">English (US)</option>
                    <option value="es">Español (ES)</option>
                    <option value="pt">Português (BR)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="settings-emp-label">Timezone</label>
                <div className="settings-input-group">
                  <i className="fa-regular fa-clock settings-input-icon"></i>
                  <select
                    className="settings-emp-select has-icon"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    <option value="utc-8">(UTC-08:00) Pacific Time</option>
                    <option value="utc-5">(UTC-05:00) Eastern / Colombia</option>
                    <option value="utc-4">(UTC-04:00) Atlantic Time</option>
                    <option value="utc-3">(UTC-03:00) Argentina / Brazil</option>
                    <option value="utc+0">(UTC+00:00) London / UTC</option>
                    <option value="utc+1">(UTC+01:00) Madrid / Paris</option>
                  </select>
                </div>
              </div>
            </div>

            {/* NOTIFICATIONS CARD */}
            <div className="settings-emp-card">
              <div className="settings-emp-card-header">
                <i className="fa-regular fa-bell"></i> NOTIFICATIONS
              </div>

              <div className="d-flex justify-content-between align-items-center py-2">
                <div>
                  <div className="text-white fw-bold" style={{ fontSize: '13.5px' }}>System Notifications</div>
                  <div className="text-muted" style={{ fontSize: '12px', marginTop: '2px' }}>In-app alerts for queue changes</div>
                </div>
                <div className="form-check form-switch m-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="systemNotifSwitch"
                    checked={systemNotif}
                    onChange={(e) => setSystemNotif(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Changes Button at bottom right */}
        <div className="d-flex justify-content-end mt-4 mb-3">
          <button type="button" className="btn-save-settings" onClick={handleSaveSettings}>
            <i className="fa-regular fa-floppy-disk"></i> SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
