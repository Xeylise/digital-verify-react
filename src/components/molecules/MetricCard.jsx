import React from 'react';

export default function MetricCard({ title, value, subtext, icon: Icon, trend, color = 'purple' }) {
  const colorMap = {
    purple: { bg: 'rgba(118, 51, 239, 0.12)', border: 'rgba(118, 51, 239, 0.3)', text: '#A855F7' },
    green: { bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.3)', text: '#10B981' },
    amber: { bg: 'rgba(245, 158, 11, 0.12)', border: 'rgba(245, 158, 11, 0.3)', text: '#F59E0B' },
    red: { bg: 'rgba(239, 68, 68, 0.12)', border: 'rgba(239, 68, 68, 0.3)', text: '#EF4444' }
  };

  const activeColor = colorMap[color] || colorMap.purple;

  return (
    <div className="card-glass" style={{ padding: '20px 22px', position: 'relative' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
          {title}
        </span>
        {Icon && (
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '8px',
              backgroundColor: activeColor.bg,
              border: `1px solid ${activeColor.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: activeColor.text
            }}
          >
            <Icon size={18} />
          </div>
        )}
      </div>

      <div style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: 4 }}>
        {value}
      </div>

      {subtext && (
        <div className="flex items-center gap-2" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          {trend && (
            <span style={{ color: trend.startsWith('+') ? '#10B981' : '#EF4444', fontWeight: 800 }}>
              {trend}
            </span>
          )}
          <span>{subtext}</span>
        </div>
      )}
    </div>
  );
}
