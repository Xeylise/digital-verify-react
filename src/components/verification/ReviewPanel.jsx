import React, { useState } from 'react';
import VerificationDetail from './VerificationDetail';
import AssignmentForm from './AssignmentForm';
import DecisionForm from './DecisionForm';
import DocumentList from '../documents/DocumentList';

/**
 * ReviewPanel component.
 * Comprehensive modal workspace organizing applicant data, document previews, timeline history,
 * assignment controls, and compliance decision recording.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Whether the review panel is visible.
 * @param {Function} props.onClose - Modal dismissal callback.
 * @param {Object} props.caseData - Case entity under review.
 * @param {Function} props.onSubmitDecision - Callback invoked upon submitting verdict.
 * @param {boolean} [props.isLoading=false] - Whether verdict recording is in progress.
 * @returns {JSX.Element|null} The rendered review modal workspace.
 */
export default function ReviewPanel({
  isOpen,
  onClose,
  caseData,
  onSubmitDecision,
  isLoading = false,
}) {
  const [activeTab, setActiveTab] = useState('documents');

  if (!isOpen || !caseData) return null;

  const isFraud = caseData.reason === 'fraud_review' || caseData.reasonLabel === 'Fraud Review';

  return (
    <div className="vr-popup-overlay" style={{ display: 'flex', zIndex: 1050 }}>
      <div className="login-container animated-login-card" style={{ maxWidth: '1200px', width: '95%' }}>
        <div className="card-login position-relative p-4" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary border-opacity-25 pb-3">
            <div className="d-flex align-items-center gap-3">
              <span className="logo-text" style={{ fontSize: '20px' }}>Digital Verify</span>
              <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(118, 51, 239, 0.2)', color: 'var(--winarena-primary-hover)', fontSize: '11px' }}>
                EXPEDIENTE #{caseData.id}
              </span>
            </div>
            <button className="vr-close-btn position-static" onClick={onClose} disabled={isLoading}>&times;</button>
          </div>

          {/* Verification Detail Card */}
          <VerificationDetail caseData={caseData} />

          {/* Body Columns */}
          <div className="row g-4 text-start">
            
            {/* Left Column: Documents & Audit Workspace */}
            <div className="col-lg-7">
              <div className="tabs-container mb-3" style={{ justifyContent: 'flex-start', borderBottom: '1px solid var(--winarena-border)', borderRadius: 0, padding: 0 }}>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('documents')}
                  style={{ borderRadius: '6px 6px 0 0' }}
                >
                  <i className="fa-regular fa-file-lines me-2"></i> Documentos ({caseData.documents?.length || 2})
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
                  onClick={() => setActiveTab('timeline')}
                  style={{ borderRadius: '6px 6px 0 0' }}
                >
                  <i className="fa-solid fa-timeline me-2"></i> Historial de Caso
                </button>
              </div>

              {activeTab === 'documents' ? (
                <div>
                  <DocumentList
                    documents={caseData.documents || [
                      { id: 1, name: 'ID_Front.jpg', type: 'Cédula de Identidad (Frente)', status: 'Verified', date: caseData.date },
                      { id: 2, name: 'Proof_of_Address.pdf', type: 'Extracto Bancario Domicilio', status: 'Pending Review', date: caseData.date }
                    ]}
                  />
                  
                  {/* Embedded Inspector Preview */}
                  <div className="mt-4 p-3 rounded-3 text-center" style={{ backgroundColor: '#05070f', border: '1px solid var(--winarena-border)' }}>
                    <div className="text-muted small mb-2">Vista previa de inspección de documento</div>
                    <img src="/img/user_avatar.jpg" alt="Preview" className="img-fluid rounded" style={{ maxHeight: '180px' }} />
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-3" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                  <div className="timeline-item active-blue mb-3">
                    <div className="timeline-title fw-bold text-white">Caso Registrado</div>
                    <div className="text-muted small">El usuario subió documentos para verificación KYC.</div>
                  </div>
                  <div className="timeline-item active-blue mb-3">
                    <div className="timeline-title fw-bold text-white">Validación OCR Automática</div>
                    <div className="text-muted small">Cotejo de identidad con 98.4% de coincidencia biométrica.</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-title fw-bold text-white">En espera de decisión del analista</div>
                    <div className="text-muted small">Asignado para dictamen final.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Assignment & Decision Panel */}
            <div className="col-lg-5">
              <AssignmentForm currentAssignee={caseData.owner} />

              <div className="p-3 rounded-4" style={{ backgroundColor: '#090e17', border: '1px solid var(--winarena-border)' }}>
                <h6 className="fw-bold text-white mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  Panel de Decisión de Auditoría
                </h6>

                <DecisionForm
                  isFraudReview={isFraud}
                  isLoading={isLoading}
                  onSubmitDecision={onSubmitDecision}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
