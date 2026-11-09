import React from 'react';
import { Link } from 'react-router-dom';

/**
 * KYCConfirmation component.
 * Success confirmation overlay informing the player that their documents were received for review.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} [props.isOpen=true] - Visibility toggle.
 * @param {Function} [props.onClose] - Close modal handler.
 * @param {string} [props.title] - Confirmation title.
 * @param {string} [props.message] - Notification guidance text.
 * @param {string} [props.redirectUrl='/kyc_status_review'] - Destination route for status consultation.
 * @param {string} [props.redirectLabel='Consult verification status'] - Action button text.
 * @returns {JSX.Element|null} The confirmation overlay element.
 */
export default function KYCConfirmation({
  isOpen = true,
  onClose,
  title = 'Your documents were successfully submitted.',
  message = "We'll notify you once updates are available.",
  redirectUrl = '/kyc_status_review',
  redirectLabel = 'Consult verification status',
}) {
  if (!isOpen) return null;

  return (
    <div
      id="kycConfirmationOverlay"
      className="vr-popup-overlay"
      style={{ display: 'flex', backgroundColor: 'rgba(7, 10, 20, 0.9)', backdropFilter: 'blur(5px)', zIndex: 1050 }}
    >
      <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
        <div className="card-login text-center p-5 position-relative">
          {onClose && <button className="vr-close-btn" onClick={onClose}>&times;</button>}
          
          <div className="kyc-icon-frame mx-auto mb-4" style={{ borderColor: 'var(--winarena-primary)', color: 'var(--winarena-primary)' }}>
            <i className="fa-solid fa-file-invoice" style={{ position: 'relative' }}>
              <i className="fa-solid fa-clock" style={{ fontSize: '16px', position: 'absolute', bottom: '-2px', right: '-2px', backgroundColor: 'var(--winarena-card-bg)', borderRadius: '50%', padding: '1px' }}></i>
            </i>
          </div>
          
          <h4 className="fw-bold text-white mb-2" style={{ fontSize: '18px', lineHeight: 1.3 }}>
            {title}
          </h4>
          <p className="text-muted small mb-4" style={{ fontSize: '13px' }}>
            {message}
          </p>
          
          <div className="mt-4">
            <Link
              to={redirectUrl}
              className="btn text-white py-3 px-4 w-100 rounded-pill fw-bold"
              style={{
                backgroundColor: 'var(--winarena-primary)',
                fontSize: '12px',
                letterSpacing: '0.8px',
                boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              {redirectLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
