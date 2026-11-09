import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import NotificationDetail from './NotificationDetail';
import NotificationBadge from './NotificationBadge';

/**
 * NotificationList component.
 * Displays the list of customer notifications, computes unread badge tallies,
 * and manages detail modal previews.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} [props.notifications] - Collection of notification objects.
 * @param {Function} [props.onNotificationClick] - Callback triggered upon selecting a message.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered notifications list view.
 */
export default function NotificationList({
  notifications = [
    {
      id: 1,
      type: 'rejected',
      title: 'Document Rejection - Action Required',
      message: 'Your proof of address was rejected due to an unreadable date stamp. Please re-upload a recent bill (last 60 days).',
      time: '10 min ago',
      read: false
    },
    {
      id: 2,
      type: 'approved',
      title: 'ID Document Verified',
      message: 'Your Cédula de Ciudadanía front and back have been validated successfully by OCR biometric engine.',
      time: '2 hours ago',
      read: true
    },
    {
      id: 3,
      type: 'info',
      title: 'KYC Verification Submitted',
      message: 'We have received your verification request. Our compliance team is auditing your case.',
      time: '1 day ago',
      read: true
    }
  ],
  onNotificationClick,
  className = '',
}) {
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Compute unread notification count
  const unreadCount = notifications.filter((notif) => !notif.read).length;

  /**
   * Opens the notification inspection modal and invokes parent notification callback.
   *
   * @param {Object} notif - Selected notification record.
   */
  const handleSelectNotification = (notif) => {
    setSelectedNotification(notif);
    if (onNotificationClick) onNotificationClick(notif);
  };

  /**
   * Dismisses the notification detail modal.
   */
  const handleCloseDetail = () => {
    setSelectedNotification(null);
  };

  /**
   * Handles remediation navigation action.
   */
  const handleRemediateAction = () => {
    alert('Redirigiendo al módulo de corrección de documentos...');
    setSelectedNotification(null);
  };

  return (
    <div className={`notification-list-container ${className}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold text-white mb-0" style={{ fontSize: '16px' }}>Notificaciones</h5>
          {unreadCount > 0 && <NotificationBadge count={unreadCount} />}
        </div>
        <span className="text-muted small" style={{ fontSize: '11px' }}>
          {notifications.length} mensajes en total
        </span>
      </div>

      <div className="d-flex flex-column gap-2">
        {notifications.length === 0 ? (
          <div className="text-center text-muted py-5">
            <i className="fa-regular fa-bell-slash fs-3 mb-2 d-block"></i>
            No tienes notificaciones en este momento.
          </div>
        ) : (
          notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              notification={notif}
              onSelect={handleSelectNotification}
            />
          ))
        )}
      </div>

      {/* Modal de detalle */}
      <NotificationDetail
        isOpen={Boolean(selectedNotification)}
        notification={selectedNotification}
        onClose={handleCloseDetail}
        onActionClick={handleRemediateAction}
      />
    </div>
  );
}
