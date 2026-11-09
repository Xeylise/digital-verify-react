import React, { useState } from 'react';

export default function SettingsPage() {
  const [twoFa, setTwoFa] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [lang, setLang] = useState('en');
  const [autoLang, setAutoLang] = useState(true);

  return (
    <div className="container-fluid p-0" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="mb-4">
        <h3 className="fw-bold text-white mb-1">Account Settings</h3>
        <p className="text-muted small">Manage your security options, preferences, and odds formats.</p>
      </div>

      {/* 1. Security Settings */}
      <div className="settings-card">
        <div className="settings-section-title"><i className="fa-solid fa-shield-halved"></i> Security Settings</div>
        
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 className="fw-bold text-white mb-0" style={{ fontSize: '14px' }}>Two-Factor Authentication (2FA)</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Secure your account with an extra verification code.</span>
          </div>
          <div className="form-check form-switch p-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="2faSwitch"
              checked={twoFa}
              onChange={(e) => setTwoFa(e.target.checked)}
            />
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="fw-bold text-white mb-0" style={{ fontSize: '14px' }}>Log in Notifications</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Get alerted when someone logs into your account.</span>
          </div>
          <div className="form-check form-switch p-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="loginAlertSwitch"
              checked={loginAlerts}
              onChange={(e) => setLoginAlerts(e.target.checked)}
            />
          </div>
        </div>
      </div>

      {/* 2. Language Settings */}
      <div className="settings-card">
        <div className="settings-section-title"><i className="fa-solid fa-globe"></i> Language Settings</div>
        
        <div className="mb-3">
          <label className="form-label">Preferred Language:</label>
          <select
            className="form-control-custom w-100"
            style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)', color: '#ffffff', padding: '10px', borderRadius: '8px' }}
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English (US)</option>
            <option value="es">Español (ES)</option>
            <option value="sv">Svenska (SE)</option>
          </select>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-2">
          <div>
            <h6 className="fw-bold text-white mb-0" style={{ fontSize: '14px' }}>Automatic Localization</h6>
            <span className="text-muted small" style={{ fontSize: '12px' }}>Detect and apply language settings based on geographical region.</span>
          </div>
          <div className="form-check form-switch p-0">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="autoLangSwitch"
              checked={autoLang}
              onChange={(e) => setAutoLang(e.target.checked)}
            />
          </div>
        </div>
      </div>

      {/* 3. Save Preferences Button */}
      <div className="text-end">
        <button
          className="btn text-white px-5 py-3 rounded-pill fw-bold"
          style={{ backgroundColor: 'var(--winarena-primary)', border: 'none', fontSize: '14px', boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)' }}
          onClick={() => alert('Settings saved successfully!')}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
