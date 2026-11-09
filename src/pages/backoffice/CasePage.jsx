import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CasePage() {
  const navigate = useNavigate();
  const [comments, setComments] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleApprove = () => {
    setShowPopup(true);
  };

  const handleReject = () => {
    alert('Case rejected. Requested player to re-submit documentation.');
    navigate('/dashboard');
  };

  return (
    <div className="container-fluid" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '15px' }}>
      {/* Back Link & Title Header */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <Link to="/dashboard" id="backLink" style={{ color: '#ffffff', fontSize: '20px', textDecoration: 'none' }}>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
        <h3 className="fw-bold text-white mb-0">Review Verification</h3>
      </div>

      <div className="row g-4">
        {/* Left Column: Applicant Info, Verification Details, Review Documents, Timeline */}
        <div className="col-lg-7">
          {/* 1. Applicant Information & 2. Verification Details */}
          <div className="validator-card mb-4">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="validator-section-title"><i className="fa-regular fa-user"></i> Applicant Information</div>
                <p className="mb-1 small"><span className="text-muted">Name:</span> Juan Perez</p>
                <p className="mb-1 small"><span className="text-muted">Email:</span> pcastrosarabia@gmail.com</p>
                <p className="mb-1 small"><span className="text-muted">Country:</span> Suecia (Sweden)</p>
                <p className="mb-0 small"><span className="text-muted">Registration:</span> 12 Jan 2026</p>
              </div>
              <div className="col-md-6">
                <div className="validator-section-title"><i className="fa-solid fa-receipt"></i> Verification Details</div>
                <p className="mb-1 small"><span className="text-muted">Case ID:</span> Case VD-0124</p>
                <p className="mb-1 small"><span className="text-muted">Account Number:</span> 60534</p>
                <p className="mb-1 small"><span className="text-muted">Submission Date:</span> 19 Jul 2026</p>
                <p className="mb-0 small"><span className="text-muted">Status:</span> <span className="status-waiting" id="caseStatusBadge">Waiting for review</span></p>
              </div>
            </div>
          </div>

          {/* 3. Review Documents */}
          <div className="validator-card mb-4">
            <div className="validator-section-title"><i className="fa-regular fa-folder-open"></i> Review Documents</div>
            
            <div className="document-preview-box mb-0 py-3">
              <div className="document-icon-wrapper" style={{ width: '36px', height: '36px' }}>
                <i className="fa-regular fa-file-pdf"></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold text-white mb-0" style={{ fontSize: '14px' }}>sweden_bank.pdf</h6>
                <span className="text-muted" style={{ fontSize: '11px' }}>Proof of Address</span>
              </div>
              <div>
                <a href="#" className="btn-view-doc" onClick={(e) => { e.preventDefault(); alert('Opening sweden_bank.pdf preview...'); }} style={{ padding: '4px 12px', fontSize: '12px' }}>
                  View <i className="fa-regular fa-eye"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 4. Timeline */}
          <div className="validator-card">
            <div className="validator-section-title"><i className="fa-solid fa-route"></i> Timeline</div>
            <div className="timeline-mini">
              <div className="timeline-mini-item">
                <div className="small fw-bold">Submitted</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>19 Jul 2026, 16:30</div>
              </div>
              <div className="timeline-mini-item">
                <div className="small fw-bold">Assigned to Validator</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>19 Jul 2026, 16:35</div>
              </div>
              <div className="timeline-mini-item active">
                <div className="small fw-bold">Under Review</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Currently in progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Internal Notes & Decision Panel */}
        <div className="col-lg-5">
          {/* 5. Internal Notes */}
          <div className="validator-card mb-4">
            <div className="validator-section-title"><i className="fa-regular fa-comment-dots"></i> Internal Notes</div>
            <textarea
              className="comments-textarea mb-0"
              id="internalComments"
              placeholder="Enter comments here..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          {/* 6. Decision Panel */}
          <div className="validator-card">
            <div className="validator-section-title"><i className="fa-solid fa-gavel"></i> Decision Panel</div>
            <p className="text-muted small mb-3">Take definitive action on the submitted documents.</p>
            
            <button className="btn-approve-vr" id="approveBtn" onClick={handleApprove}>Approve and transfer to VR</button>
            <button className="btn-reject-submit" onClick={handleReject}>Reject and asked to submit</button>
          </div>
        </div>
      </div>

      {/* Screen 3: Popup Overlay */}
      {showPopup && (
        <div id="vrPopupOverlay" className="vr-popup-overlay" style={{ display: 'flex' }}>
          <div className="vr-popup-card">
            <button className="vr-close-btn" onClick={() => setShowPopup(false)}>&times;</button>
            
            <div className="vr-check-icon-circle">
              <i className="fa-solid fa-check"></i>
            </div>
            
            <h4 className="fw-bold text-white mb-2">Sent to VR team</h4>
            <p className="text-muted small mb-4">Case VD-0124 was validated and pending for VR updates.</p>
            
            <button className="btn-login-submit" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}
