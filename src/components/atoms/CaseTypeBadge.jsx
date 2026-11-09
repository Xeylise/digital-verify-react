import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

export default function CaseTypeBadge({ type }) {
  const isFraud = type === 'FRAUD_REVIEW' || type === 'FRAUD';

  return (
    <span
      className="badge"
      style={{
        backgroundColor: isFraud ? 'rgba(239, 68, 68, 0.15)' : 'rgba(118, 51, 239, 0.15)',
        color: isFraud ? '#F87171' : '#A855F7',
        border: `1px solid ${isFraud ? 'rgba(239, 68, 68, 0.4)' : 'rgba(118, 51, 239, 0.4)'}`,
        fontSize: '11px',
        fontWeight: 700
      }}
    >
      {isFraud ? <ShieldAlert size={12} /> : <ShieldCheck size={12} />}
      {isFraud ? 'Fraud Review' : 'Proactive KYC'}
    </span>
  );
}
