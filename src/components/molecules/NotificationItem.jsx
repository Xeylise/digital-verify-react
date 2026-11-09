import React from 'react';
import { Link } from 'react-router-dom';
import { Info, CheckCircle2, AlertTriangle, ArrowRight, FileQuestion } from 'lucide-react';

export default function NotificationItem({ notification, onMarkRead, onCloseDrawer }) {
  const { id, title, description, category, timestamp, read, actionUrl, actionLabel } = notification;

  const categoryStyles = {
    SUCCESS: { icon: CheckCircle2, color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
    ACTION_REQUIRED: { icon: FileQuestion, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
    ALERT: { icon: AlertTriangle, color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)' },
    INFO: { icon: Info, color: '#7633EF', bg: 'rgba(118, 51, 239, 0.15)' }
  }[category] || { icon: Info, color: '#7633EF', bg: 'rgba(118, 51, 239, 0.15)' };

  const IconComponent = categoryStyles.icon;

  return (
    <div
      style={{
        padding: '14px 16px',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: read ? 'transparent' : 'rgba(118, 51, 239, 0.05)',
        transition: 'background-color 0.15s ease'
      }}
    >
      <div className="flex items-start gap-3">
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: categoryStyles.bg,
            color: categoryStyles.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <IconComponent size={16} />
        </div>

        <div style={{ flex: 1 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 2 }}>
            <span style={{ fontSize: 13, fontWeight: read ? 600 : 800, color: '#ffffff' }}>
              {title}
            </span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{timestamp}</span>
          </div>

          <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: 8 }}>
            {description}
          </p>

          <div className="flex items-center justify-between">
            {actionUrl ? (
              <Link
                to={actionUrl}
                onClick={() => {
                  onMarkRead(id);
                  if (onCloseDrawer) onCloseDrawer();
                }}
                className="flex items-center gap-1"
                style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary-hover)' }}
              >
                <span>{actionLabel || 'Ver Más'}</span>
                <ArrowRight size={12} />
              </Link>
            ) : <span />}

            {!read && (
              <button
                onClick={() => onMarkRead(id)}
                style={{ fontSize: 10, color: 'var(--text-dim)', textDecoration: 'underline' }}
              >
                Marcar como leída
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
