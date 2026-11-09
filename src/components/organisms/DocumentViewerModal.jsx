import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, CheckCircle2, AlertTriangle, Eye, ShieldCheck, UserCheck } from 'lucide-react';
import StatusBadge from '../atoms/StatusBadge';
import CaseTypeBadge from '../atoms/CaseTypeBadge';
import OcrComparisonRow from '../molecules/OcrComparisonRow';
import CaseDecisionBar from '../molecules/CaseDecisionBar';
import CaseDecisionDrawer from './CaseDecisionDrawer';
import Button from '../atoms/Button';

export default function DocumentViewerModal({ caseItem, onClose, onUpdateStatus, onRequestDoc, onAssignCase }) {
  const [activeTab, setActiveTab] = useState('documents'); // 'documents' | 'biometrics' | 'ocr'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [decisionMode, setDecisionMode] = useState(null); // 'reject' | 'request_doc' | null

  if (!caseItem) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 1));

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 880, padding: 0 }}
      >
        {/* Header Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#0c101d'
          }}
        >
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 18, fontWeight: 900, color: '#ffffff' }}>
              Expediente: {caseItem.id}
            </span>
            <CaseTypeBadge type={caseItem.caseType} />
            <StatusBadge status={caseItem.status} riskScore={caseItem.riskScore} />
          </div>

          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Applicant Context Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '12px 24px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src={caseItem.applicant.avatar}
              alt={caseItem.applicant.name}
              style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--primary)' }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#ffffff' }}>{caseItem.applicant.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                {caseItem.applicant.email} • Asignado a: <strong style={{ color: 'var(--primary-hover)' }}>{caseItem.assignedTo || 'Sin Asignar'}</strong>
              </div>
            </div>
          </div>

          {/* Quick Assign Analyst Button (RF004) */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onAssignCase(caseItem.id, 'Paola Castro')}
            >
              Asignar a mí
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '0 24px',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#0a0e19'
          }}
        >
          <div className="flex">
            {[
              { id: 'documents', label: 'Inspección de Documentos (RF003)' },
              { id: 'biometrics', label: 'Cotejo Biométrico Facial' },
              { id: 'ocr', label: 'Extracción OCR & Datos' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 18px',
                  fontSize: 13,
                  fontWeight: 700,
                  color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                  borderBottom: `2px solid ${activeTab === tab.id ? 'var(--primary)' : 'transparent'}`,
                  transition: 'all 0.2s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'documents' && (
            <div className="flex items-center gap-1">
              <button onClick={handleZoomOut} className="btn-secondary" style={{ padding: '4px 8px' }} title="Alejar">
                <ZoomOut size={14} />
              </button>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', minWidth: 40, textAlign: 'center' }}>
                {Math.round(zoomLevel * 100)}%
              </span>
              <button onClick={handleZoomIn} className="btn-secondary" style={{ padding: '4px 8px' }} title="Acercar">
                <ZoomIn size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Tab Body */}
        <div style={{ padding: 24, maxHeight: '50vh', overflowY: 'auto' }}>
          {activeTab === 'documents' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Front Side */}
                <div className="card-glass" style={{ padding: 14 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>Anverso (Frontal)</span>
                    <span className="badge badge-purple" style={{ fontSize: 10 }}>{caseItem.applicant.documentType}</span>
                  </div>
                  <div style={{ height: 170, backgroundColor: '#04060b', borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={caseItem.documents.front}
                      alt="Front Doc"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-glass" style={{ padding: 14 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>Reverso (Dorso)</span>
                    <span className="badge badge-purple" style={{ fontSize: 10 }}>Código MRZ / Barras</span>
                  </div>
                  <div style={{ height: 170, backgroundColor: '#04060b', borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={caseItem.documents.back}
                      alt="Back Doc"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
                    />
                  </div>
                </div>
              </div>

              {/* Domicile Proof */}
              <div className="card-glass" style={{ padding: 14, marginTop: 14 }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>Comprobante de Domicilio</span>
                  <span style={{ fontSize: 11, color: 'var(--accent-green)', fontWeight: 600 }}>Dirección: {caseItem.applicant.address}</span>
                </div>
                <div style={{ height: 100, borderRadius: 6, overflow: 'hidden', backgroundColor: '#04060b' }}>
                  <img src={caseItem.documents.proofAddress} alt="Proof" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'biometrics' && (
            <div className="flex items-center justify-center gap-8" style={{ padding: '20px 0' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 130, height: 130, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary)', marginBottom: 8 }}>
                  <img src={caseItem.applicant.avatar} alt="Doc Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Foto del Documento</span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: caseItem.biometrics.faceMatchConfidence > 80 ? '#10B981' : '#EF4444' }}>
                  {caseItem.biometrics.faceMatchConfidence}%
                </div>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Confianza Facial</span>
                <div style={{ marginTop: 8 }}>
                  <span className={caseItem.biometrics.livenessDetected ? 'badge badge-approved' : 'badge badge-rejected'}>
                    {caseItem.biometrics.livenessDetected ? 'Prueba de Vida OK' : 'Fallo de Vida'}
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 130, height: 130, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent-green)', marginBottom: 8 }}>
                  <img src={caseItem.documents.selfie} alt="Live Selfie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Selfie en Vivo</span>
              </div>
            </div>
          )}

          {activeTab === 'ocr' && (
            <div className="card-glass" style={{ padding: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    <th style={{ textAlign: 'left', padding: '8px 14px' }}>Campo</th>
                    <th style={{ textAlign: 'left', padding: '8px 14px' }}>Valor OCR Extraído</th>
                    <th style={{ textAlign: 'left', padding: '8px 14px' }}>Validación</th>
                  </tr>
                </thead>
                <tbody>
                  <OcrComparisonRow label="Nombre Completo" extractedValue={caseItem.applicant.name} isValid={caseItem.ocrResult.nameMatch} />
                  <OcrComparisonRow label="Número de Documento" extractedValue={caseItem.applicant.documentNumber} isValid={caseItem.ocrResult.mrzChecksumValid} />
                  <OcrComparisonRow label="Fecha de Nacimiento" extractedValue={caseItem.applicant.birthDate} isValid={true} note="Mayor de edad" />
                  <OcrComparisonRow label="Nacionalidad" extractedValue={caseItem.applicant.nationality} isValid={true} note="Válida" />
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Decision Drawer Sub-component if action active (RF004) */}
        {decisionMode && (
          <CaseDecisionDrawer
            mode={decisionMode}
            onClose={() => setDecisionMode(null)}
            onConfirm={(reasonOrNote) => {
              if (decisionMode === 'reject') {
                onUpdateStatus(caseItem.id, 'REJECTED', reasonOrNote);
              } else {
                onRequestDoc(caseItem.id, reasonOrNote);
              }
              onClose();
            }}
          />
        )}

        {/* Action Decision Bar (RF004) */}
        {!decisionMode && (
          <CaseDecisionBar
            onApprove={() => {
              onUpdateStatus(caseItem.id, 'APPROVED');
              onClose();
            }}
            onRequestDoc={() => setDecisionMode('request_doc')}
            onStartReject={() => setDecisionMode('reject')}
          />
        )}
      </div>
    </div>
  );
}
