import React from 'react';

export default function PriorityBadge({ priority = 'MEDIUM' }) {
  const styles = {
    HIGH: { bg: 'rgba(239, 68, 68, 0.15)', text: '#EF4444', label: 'Alta' },
    MEDIUM: { bg: 'rgba(245, 158, 11, 0.15)', text: '#F59E0B', label: 'Media' },
    LOW: { bg: 'rgba(16, 185, 129, 0.15)', text: '#10B981', label: 'Baja' }
  }[priority?.toUpperCase()] || { bg: 'rgba(255,255,255,0.05)', text: '#fff', label: priority };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: '11px',
        fontWeight: 700,
        backgroundColor: styles.bg,
        color: styles.text
      }}
    >
      {styles.label}
    </span>
  );
}
