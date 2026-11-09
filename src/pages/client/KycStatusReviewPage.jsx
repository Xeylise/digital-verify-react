import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressTracker from '../../components/tracking/ProgressTracker';

/**
 * KycStatusReviewPage component.
 * Status tracking dashboard for end-users, rendering interactive timelines and
 * alert modals for remediation actions or verified completion certificates.
 *
 * @returns {JSX.Element} The rendered verification status page.
 */
export default function KycStatusReviewPage() {
  // States: 'in_review' (default) | 'rejected' | 'completed'
  const [currentState, setCurrentState] = useState('in_review');
  const [detailModal, setDetailModal] = useState(null); // 'rejected' | 'completed' | null
  const [isRefreshing, setIsRefreshing] = useState(false);

  /**
   * Refreshes the verification status from the server or cycles demonstration states.
   */
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const states = ['in_review', 'rejected', 'completed'];
      const nextIdx = (states.indexOf(currentState) + 1) % states.length;
      setCurrentState(states[nextIdx]);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="kyc-wrapper">
      {/* Main Timeline Container */}
      <div id="main-timeline-view" className="w-100 text-center">
        <h1 className="kyc-title text-start">Verification status</h1>
        <p className="kyc-subtitle text-start mb-4">Welcome to Digital Verify.</p>

        {/* Timeline Box */}
        <div className="notification-card p-4 mb-4">
          <ProgressTracker
            currentState={currentState}
            onShowRejectedInfo={() => setDetailModal('rejected')}
            onShowCompletedInfo={() => setDetailModal('completed')}
          />

          <div className="w-100 text-center mt-3">
            <button
              type="button"
              className="btn-kyc-primary w-75 py-3 text-center border-0"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              {isRefreshing ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Refreshing status...
                </>
              ) : (
                'Refresh status'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Detail View: Action Required Modal Overlay */}
      {detailModal === 'rejected' && (
        <div id="detail-rejected-overlay" className="vr-popup-overlay" style={{ display: 'flex' }}>
          <div className="vr-popup-card">
            <button className="vr-close-btn" onClick={() => setDetailModal(null)}>&times;</button>
            <div className="kyc-icon-frame" style={{ borderColor: '#ef4444', marginTop: '30px' }}>
              <i className="fa-solid fa-circle-exclamation text-danger" style={{ fontSize: '36px' }}></i>
            </div>
            <h1 className="kyc-title">Action required</h1>
            <p className="kyc-subtitle">We need additional documents to verify your identity such as:<br /><br />- A new proof of address from different source.</p>
            <div className="w-100 text-center mt-4">
              <Link to="/start_kyc" className="btn-kyc-primary w-75 py-3 text-center d-inline-block rounded-pill text-decoration-none text-white fw-bold" style={{ backgroundColor: 'var(--winarena-primary)', fontSize: '15px' }}>
                Submit new documents
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Detail View: Completed Modal Overlay */}
      {detailModal === 'completed' && (
        <div id="detail-completed-overlay" className="vr-popup-overlay" style={{ display: 'flex' }}>
          <div className="vr-popup-card">
            <button className="vr-close-btn" onClick={() => setDetailModal(null)}>&times;</button>
            <div className="kyc-icon-frame" style={{ borderColor: '#10b981', marginTop: '30px' }}>
              <i className="fa-solid fa-circle-check text-success" style={{ fontSize: '36px' }}></i>
            </div>
            <h1 className="kyc-title">Completed</h1>
            <p className="kyc-subtitle">Your account was reactivated successfully.</p>
            <div className="w-100 text-center mt-4">
              <Link to="/home" className="btn-kyc-primary w-75 py-3 text-center d-inline-block rounded-pill text-decoration-none text-white fw-bold" style={{ backgroundColor: 'var(--winarena-primary)', fontSize: '15px' }}>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
