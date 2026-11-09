import React from 'react';
import { useNavigate } from 'react-router-dom';
import KycSequentialStepper from '../../components/organisms/KycSequentialStepper';

export default function KycWizardPage() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#ffffff' }}>
          Verificación de Identidad KYC (RF002)
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 6 }}>
          Proceso guiado y secuencial para la validación de identidad y cumplimiento normativo
        </p>
      </div>

      <KycSequentialStepper onComplete={() => navigate('/kyc/status')} />
    </div>
  );
}
