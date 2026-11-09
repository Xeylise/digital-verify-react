import React from 'react';

/**
 * NotificationDetail component.
 * Expanded modal dialog displaying full details of a chosen notification and call-to-action button.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Visibility toggle.
 * @param {Object} props.notification - Notification record to inspect.
 * @param {Function} props.onClose - Modal close handler.
 * @param {Function} [props.onActionClick] - Handler for the primary remediation action.
 * @param {string} [props.actionLabel='Resolver / Actualizar'] - Label on the action button.
 * @returns {JSX.Element|null} The rendered notification modal.
 */
export default function NotificationDetail({
  isOpen,
  notification,
  onClose,
  onActionClick,
  actionLabel = 'Resolver / Actualizar',
}) {
  if (!isOpen || !notification) return null;

  return (
    <div className="vr-popup-overlay" style={{ display: 'flex', zIndex: 1060 }}>
      <div className="login-container animated-login-card" style={{ maxWidth: '480px', width: '90%' }}>
        <div className="card-login p-4 position-relative text-center">
          <button className="vr-close-btn" onClick={onClose}>&times;</button>

          <div
            className="kyc-icon-frame mx-auto mb-3"
            style={{
              borderColor: notification.type === 'rejected' ? '#ef4444' : 'var(--winarena-primary)',
              color: notification.type === 'rejected' ? '#ef4444' : 'var(--winarena-primary)'
            }}
          >
            <i className={`fa-solid ${notification.type === 'rejected' ? 'fa-triangle-exclamation' : 'fa-bell'}`}></i>
          </div>

          <h5 className="fw-bold text-white mb-2">{notification.title}</h5>
          <span className="text-muted small d-block mb-3">{notification.time || notification.date || 'Notificación oficial de seguridad'}</span>

          <div className="notification-card p-3 mb-4 text-start" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
            <p className="text-white small mb-0" style={{ lineHeight: 1.5, fontSize: '13px' }}>
              {notification.message || notification.desc || 'No hay contenido adicional para este mensaje.'}
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn flex-grow-1 py-2 rounded-pill fw-bold"
              style={{ backgroundColor: '#1b2233', color: '#ffffff', border: '1px solid var(--winarena-border)', fontSize: '12px' }}
              onClick={onClose}
            >
              Cerrar
            </button>
            {onActionClick && (
              <button
                type="button"
                className="btn flex-grow-1 py-2 rounded-pill fw-bold text-white"
                style={{ backgroundColor: 'var(--winarena-primary)', border: 'none', fontSize: '12px', boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)' }}
                onClick={onActionClick}
              >
                {actionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
