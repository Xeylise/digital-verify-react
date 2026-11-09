import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function TimelineStep({
  title,
  description,
  timestamp,
  isCompleted,
  isActive,
  isLast,
  color = '#10B981'
}) {
  return (
    <div style={{ position: 'relative', paddingBottom: isLast ? 0 : 28 }}>
      {/* Connector Line */}
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: 11,
            top: 24,
            bottom: 0,
            width: 2,
            backgroundColor: isCompleted ? '#10B981' : 'var(--border-color)'
          }}
        />
      )}

      <div className="flex items-start gap-4">
        {/* Node Circle */}
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: 'var(--bg-card)',
            border: `2px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            color
          }}
        >
          {isCompleted ? (
            <CheckCircle2 size={14} />
          ) : isActive ? (
            <Clock size={14} />
          ) : (
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--text-dim)' }} />
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{title}</span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{timestamp}</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{description}</p>
        </div>
      </div>
    </div>
  );
}
