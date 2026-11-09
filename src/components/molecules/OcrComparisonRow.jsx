import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function OcrComparisonRow({ label, extractedValue, isValid = true, note = 'Coincide 100%' }) {
  return (
    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <td style={{ padding: '10px 14px', color: 'var(--text-muted)' }}>{label}</td>
      <td style={{ padding: '10px 14px', fontWeight: 700, color: '#ffffff' }}>{extractedValue}</td>
      <td style={{ padding: '10px 14px' }}>
        <div className="flex items-center gap-1" style={{ color: isValid ? 'var(--accent-green)' : 'var(--accent-red)', fontSize: 12, fontWeight: 700 }}>
          {isValid ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
          <span>{note}</span>
        </div>
      </td>
    </tr>
  );
}
