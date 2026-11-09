import React from 'react';

/**
 * ConfirmationModal component.
 * Modal dialogue to request explicit confirmation before executing critical operations.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Controls modal visibility.
 * @param {string} props.title - Modal heading text.
 * @param {string} props.message - Detailed explanation of the action to be confirmed.
 * @param {string} [props.confirmText='Confirmar'] - Label for the confirm button.
 * @param {string} [props.cancelText='Cancelar'] - Label for the cancel button.
 * @param {Function} props.onConfirm - Action callback executed when confirmation is granted.
 * @param {Function} props.onCancel - Callback executed when the operation is cancelled or dismissed.
 * @param {('primary'|'danger')} [props.confirmVariant='primary'] - Button styling for affirmative action.
 * @param {boolean} [props.isLoading=false] - Whether the confirmed action is currently executing.
 * @returns {JSX.Element|null} The rendered modal overlay or null if closed.
 */
export default function ConfirmationModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  confirmVariant = 'primary',
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="vr-popup-overlay" style={{ display: 'flex', zIndex: 1050 }}>
      <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
        <div className="card-login text-center p-4 position-relative">
          <button className="vr-close-btn" onClick={onCancel} disabled={isLoading}>&times;</button>
          
          <div className="kyc-icon-frame mx-auto mb-3" style={{ borderColor: confirmVariant === 'danger' ? '#ef4444' : 'var(--winarena-primary)' }}>
            <i className={`fa-solid ${confirmVariant === 'danger' ? 'fa-triangle-exclamation text-danger' : 'fa-circle-question text-white'}`}></i>
          </div>

          <h5 className="fw-bold text-white mb-2">{title}</h5>
          <p className="text-muted small mb-4">{message}</p>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn flex-grow-1 py-2 rounded-pill fw-bold"
              style={{ backgroundColor: '#1b2233', color: '#ffffff', border: '1px solid var(--winarena-border)', fontSize: '13px' }}
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className="btn flex-grow-1 py-2 rounded-pill fw-bold"
              style={{
                backgroundColor: confirmVariant === 'danger' ? '#ef4444' : 'var(--winarena-primary)',
                color: '#ffffff',
                border: 'none',
                fontSize: '13px',
                boxShadow: confirmVariant === 'danger' ? '0 4px 15px rgba(239, 68, 68, 0.3)' : '0 4px 15px rgba(118, 51, 239, 0.3)'
              }}
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Procesando...
                </>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
