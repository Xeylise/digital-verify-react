import React from 'react';

/**
 * VerificationDetail component.
 * Displays key summary attributes of a verification case (Account ID, country, audit trigger, status).
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.caseData - Case data object.
 * @param {Function} [props.onClose] - Close callback.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element|null} The rendered case header card.
 */
export default function VerificationDetail({
  caseData,
  onClose,
  className = '',
}) {
  if (!caseData) return null;

  return (
    <div className={`p-3 rounded-4 mb-4 ${className}`} style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
      <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary border-opacity-25 pb-2">
        <div>
          <span className="badge rounded-pill me-2" style={{ backgroundColor: 'rgba(118, 51, 239, 0.2)', color: 'var(--winarena-primary-hover)' }}>
            Expediente Oficial
          </span>
          <span className="fw-bold text-white fs-6">{caseData.id}</span>
        </div>
        <span className="text-muted small">Registrado: {caseData.date}</span>
      </div>

      <div className="row g-3">
        <div className="col-md-3 col-6">
          <span className="text-muted d-block small">Cuenta de Jugador</span>
          <span className="fw-bold text-white">{caseData.account || '78125'}</span>
        </div>
        <div className="col-md-3 col-6">
          <span className="text-muted d-block small">País Emisor</span>
          <span className="fw-bold text-white">{caseData.country || 'Colombia'}</span>
        </div>
        <div className="col-md-3 col-6">
          <span className="text-muted d-block small">Motivo de Auditoría</span>
          <span className="fw-bold text-white">{caseData.reasonLabel || caseData.reason || 'Fraud Review'}</span>
        </div>
        <div className="col-md-3 col-6">
          <span className="text-muted d-block small">Estado de Cuenta</span>
          <span className={`badge ${caseData.accountStatus === 'Suspended' ? 'badge-acc-suspended' : 'badge-acc-active'}`}>
            {caseData.accountStatus || 'Active'}
          </span>
        </div>
      </div>
    </div>
  );
}
