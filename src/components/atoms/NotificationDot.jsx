import React from 'react';

export default function NotificationDot({ count = 0, max = 9 }) {
  if (!count || count <= 0) return null;

  return (
    <span
      style={{
        position: 'absolute',
        top: -4,
        right: -6,
        backgroundColor: '#EF4444',
        color: '#ffffff',
        borderRadius: 9999,
        fontSize: '9px',
        fontWeight: 800,
        padding: '1px 5px',
        lineHeight: 1.2,
        boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)'
      }}
    >
      {count > max ? `${max}+` : count}
    </span>
  );
}
