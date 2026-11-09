import React, { useState } from 'react';
import ProgressTracker from './ProgressTracker';
import FormButton from '../common/FormButton';

/**
 * VerificationStatus component.
 * Client-facing dashboard widget for tracking KYC status transitions and resolving review actions.
 *
 * @param {Object} props - Component properties.
 * @param {('in_review'|'rejected'|'completed')} [props.initialStatus='in_review'] - Initial display state.
 * @param {Function} [props.onRefresh] - Custom refresh handler.
 * @param {boolean} [props.isLoading=false] - Whether status synchronization is active.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered verification status card.
 */
export default function VerificationStatus({
  initialStatus = 'in_review',
  onRefresh,
  isLoading = false,
  className = '',
}) {
  const [currentState, setCurrentState] = useState(initialStatus);
  const [detailModal, setDetailModal] = useState(null);

  /**
   * Refreshes verification state or cycles testing states if no handler provided.
   */
  const handleRefreshClick = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      const states = ['in_review', 'rejected', 'completed'];
      const nextIndex = (states.indexOf(currentState) + 1) % states.length;
      setCurrentState(states[nextIndex]);
    }
  };

  return (
    <div className={`kyc-wrapper ${className}`}>
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
            <FormButton
              type="button"
              variant="kyc"
              isLoading={isLoading}
              loadingText="Refreshing status..."
              onClick={handleRefreshClick}
              className="w-75 py-3 border-0"
            >
              Refresh status
            </FormButton>
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
            <p className="kyc-subtitle">Please resolve the issues below to complete your verification.</p>
            
            <div className="notification-card">
              <div className="notification-title">Document rejection</div>
              <div className="notification-desc">We couldn't verify your document: invalid format or blurry image.</div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn-kyc-primary py-2 px-4 border-0"
                  style={{ fontSize: '12px', letterSpacing: '0.5px' }}
                  onClick={() => alert('Redirecting to re-upload ID')}
                >
                  Fix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail View: Completed Info Modal Overlay */}
      {detailModal === 'completed' && (
        <div id="detail-completed-overlay" className="vr-popup-overlay" style={{ display: 'flex' }}>
          <div className="vr-popup-card">
            <button className="vr-close-btn" onClick={() => setDetailModal(null)}>&times;</button>
            <div className="kyc-icon-frame" style={{ borderColor: '#22c55e', marginTop: '30px' }}>
              <i className="fa-solid fa-circle-check text-success" style={{ fontSize: '36px' }}></i>
            </div>
            <h1 className="kyc-title">Verification completed</h1>
            <p className="kyc-subtitle">Your identity has been successfully verified.</p>
            
            <div className="notification-card">
              <div className="notification-title">All set!</div>
              <div className="notification-desc">Your account has unrestricted access to deposits, esports bets, and fast withdrawals.</div>
              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn-kyc-primary py-2 px-4 border-0"
                  style={{ fontSize: '12px', letterSpacing: '0.5px' }}
                  onClick={() => setDetailModal(null)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
