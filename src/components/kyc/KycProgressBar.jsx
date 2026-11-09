import React from 'react';
import { Check } from 'lucide-react';

const steps = [
  { step: 1, title: 'Inicio KYC' },
  { step: 2, title: 'Documento & Selfie' },
  { step: 3, title: 'Domicilio' },
  { step: 4, title: 'Revisión y Estado' }
];

export default function KycProgressBar({ currentStep }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="flex items-center justify-between" style={{ position: 'relative' }}>
        {/* Progress Track Line */}
        <div
          style={{
            position: 'absolute',
            top: 18,
            left: 20,
            right: 20,
            height: 3,
            backgroundColor: 'var(--border-color)',
            zIndex: 1
          }}
        >
          <div
            style={{
              height: '100%',
              backgroundColor: 'var(--primary)',
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              transition: 'width 0.3s ease'
            }}
          />
        </div>

        {/* Step Nodes */}
        {steps.map((s) => {
          const isCompleted = currentStep > s.step;
          const isActive = currentStep === s.step;

          return (
            <div
              key={s.step}
              className="flex flex-col items-center"
              style={{ position: 'relative', zIndex: 2 }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 14,
                  backgroundColor: isCompleted ? 'var(--primary)' : isActive ? 'var(--bg-card)' : 'var(--bg-dark)',
                  color: isCompleted || isActive ? '#ffffff' : 'var(--text-dim)',
                  border: `2px solid ${isCompleted || isActive ? 'var(--primary)' : 'var(--border-color)'}`,
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                  transition: 'all 0.25s'
                }}
              >
                {isCompleted ? <Check size={18} /> : s.step}
              </div>
              <span
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  textAlign: 'center'
                }}
              >
                {s.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
