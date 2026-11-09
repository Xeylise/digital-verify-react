import React from 'react';
import { Link } from 'react-router-dom';

export default function StartKycPage() {
  return (
    <div className="kyc-wrapper text-center">
      <div className="kyc-icon-frame" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
        <img src="/img/logo.svg" alt="Digital Verify Logo" style={{ width: '60px', height: '80px' }} />
      </div>
      
      <h1 className="kyc-title">Digital Verify</h1>
      <p className="kyc-subtitle">Verify your identity to keep<br />your account secure.</p>
      
      <div className="w-100 text-center mt-4">
        <Link to="/upload_id" className="btn-kyc-primary w-75 py-3 text-center text-decoration-none d-inline-block">
          Start verification
        </Link>
      </div>
    </div>
  );
}
