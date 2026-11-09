import React from 'react';

/**
 * ProgressTracker component.
 * Visual linear timeline depicting verification milestones (Pending, In Review, Action Required, Completed).
 *
 * @param {Object} props - Component properties.
 * @param {('pending'|'in_review'|'rejected'|'completed')} [props.currentState='in_review'] - Active KYC phase.
 * @param {Function} [props.onShowRejectedInfo] - Handler to display rejection reason dialog.
 * @param {Function} [props.onShowCompletedInfo] - Handler to display completion modal.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered verification timeline.
 */
export default function ProgressTracker({
  currentState = 'in_review',
  onShowRejectedInfo,
  onShowCompletedInfo,
  className = '',
}) {
  return (
    <div className={`kyc-timeline ${className}`}>
      {/* State: Pending */}
      <div className="timeline-item">
        <div className="timeline-dot dotted"></div>
        <div className="timeline-title">Pending</div>
      </div>
      
      {/* State: In Review */}
      <div
        id="timeline-review-item"
        className={`timeline-item ${currentState === 'in_review' ? 'active-blue' : ''}`}
      >
        <div
          className={`timeline-dot ${currentState === 'in_review' ? 'active-blue' : ''}`}
          id="review-dot"
        >
          {currentState === 'in_review' && <i className="fa-solid fa-clock" style={{ color: '#ffffff' }}></i>}
        </div>
        <div className="timeline-title" id="review-title">In review</div>
        {currentState === 'in_review' && (
          <div className="timeline-desc" id="review-desc">Last update: 1 day ago.</div>
        )}
      </div>

      {/* State: Action Required (Only visible in Rejected state) */}
      {currentState === 'rejected' && (
        <div id="timeline-action-item" className="timeline-item active-danger">
          <div className="timeline-dot active-danger">
            <i className="fa-solid fa-triangle-exclamation" style={{ color: '#ffffff' }}></i>
          </div>
          <div className="timeline-title d-flex align-items-center">
            <span>Action required</span>
            <span
              className="info-pill ms-2"
              onClick={onShowRejectedInfo}
              style={{ cursor: 'pointer' }}
            >
              info <i className="fa-solid fa-circle-info ms-1"></i>
            </span>
          </div>
        </div>
      )}

      {/* State: Completed */}
      <div
        id="timeline-completed-item"
        className={`timeline-item ${currentState === 'completed' ? 'active-success' : ''}`}
      >
        <div
          className={`timeline-dot ${currentState === 'completed' ? 'active-success' : ''}`}
          id="completed-dot"
        >
          {currentState === 'completed' && <i className="fa-solid fa-check" style={{ color: '#ffffff' }}></i>}
        </div>
        <div className="timeline-title d-flex align-items-center" id="completed-title-area">
          <span>Completed</span>
          {currentState === 'completed' && (
            <span
              className="info-pill ms-2"
              id="completed-info-pill"
              onClick={onShowCompletedInfo}
              style={{ cursor: 'pointer' }}
            >
              info <i className="fa-solid fa-circle-info ms-1"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
