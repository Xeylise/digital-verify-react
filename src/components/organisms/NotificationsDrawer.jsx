import React from 'react';
import { useNotifications } from '../../context/NotificationContext';
import NotificationItem from '../molecules/NotificationItem';
import { X, Bell, CheckCheck } from 'lucide-react';
import Button from '../atoms/Button';

export default function NotificationsDrawer() {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    isDrawerOpen,
    closeDrawer
  } = useNotifications();

  if (!isDrawerOpen) return null;

  return (
    <div
      className="modal-backdrop animate-fade-in"
      onClick={closeDrawer}
      style={{ justifyContent: 'flex-end', padding: 0 }}
    >
      <div
        className="card-glass"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 420,
          height: '100vh',
          borderRadius: 0,
          borderLeft: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0c101d'
        }}
      >
        {/* Drawer Header */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '18px 20px', borderBottom: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center gap-2">
            <Bell size={18} color="var(--primary-hover)" />
            <h2 style={{ fontSize: 16, fontWeight: 800, color: '#ffffff' }}>
              Centro de Notificaciones (RF006)
            </h2>
            {unreadCount > 0 && (
              <span
                style={{
                  backgroundColor: '#EF4444',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: 9999
                }}
              >
                {unreadCount} nuevas
              </span>
            )}
          </div>

          <button onClick={closeDrawer} style={{ color: 'var(--text-muted)' }}>
            <X size={18} />
          </button>
        </div>

        {/* Action bar to mark all read */}
        {unreadCount > 0 && (
          <div
            className="flex items-center justify-between"
            style={{ padding: '10px 20px', backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-color)' }}
          >
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Historial de avisos normativos</span>
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-1"
              style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary-hover)' }}
            >
              <CheckCheck size={13} />
              <span>Marcar todas como leídas</span>
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {notifications.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
              No tienes notificaciones en este momento.
            </div>
          ) : (
            notifications.map((notif) => (
              <NotificationItem
                key={notif.id}
                notification={notif}
                onMarkRead={markAsRead}
                onCloseDrawer={closeDrawer}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
