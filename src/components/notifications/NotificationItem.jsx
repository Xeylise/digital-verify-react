import React from 'react';

/**
 * NotificationItem component.
 * Individual notification card displaying icon, title, timestamp, and message summary.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.notification - Notification record object.
 * @param {Function} [props.onSelect] - Selection handler callback.
 * @param {Function} [props.onMarkRead] - Mark as read handler callback.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element|null} The rendered item card element.
 */
export default function NotificationItem({
  notification,
  onSelect,
  onMarkRead,
  className = '',
}) {
  if (!notification) return null;

  /**
   * Resolves notification icon based on message category.
   *
   * @returns {string} FontAwesome icon class string.
   */
  const getIcon = () => {
    switch (notification.type) {
      case 'rejected':
      case 'alert':
        return 'fa-solid fa-triangle-exclamation text-danger';
      case 'success':
      case 'approved':
        return 'fa-solid fa-circle-check text-success';
      case 'info':
        return 'fa-solid fa-circle-info text-info';
      default:
        return 'fa-regular fa-bell text-primary';
    }
  };

  return (
    <div
      className={`notification-card p-3 mb-2 cursor-pointer ${notification.read ? 'opacity-75' : ''} ${className}`}
      onClick={() => onSelect && onSelect(notification)}
      style={{
        backgroundColor: notification.read ? '#070a14' : 'rgba(118, 51, 239, 0.08)',
        border: `1px solid ${notification.read ? 'var(--winarena-border)' : 'var(--winarena-primary)'}`,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      <div className="d-flex align-items-start gap-3 text-start">
        <div className="fs-5 mt-1">
          <i className={getIcon()}></i>
        </div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h6 className="fw-bold text-white mb-0" style={{ fontSize: '13px' }}>
              {notification.title}
            </h6>
            <span className="text-muted" style={{ fontSize: '10px' }}>
              {notification.time || notification.date || 'Reciente'}
            </span>
          </div>
          <p className="text-muted small mb-0" style={{ fontSize: '12px', lineHeight: 1.4 }}>
            {notification.message || notification.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
