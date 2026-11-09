import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  FileCheck, 
  Eye, 
  ZoomIn, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

export default function CaseReviewModal({ caseItem, onClose, onUpdateStatus }) {
  const [activeTab, setActiveTab] = useState('documents'); // 'documents' | 'biometrics' | 'ocr'
  const [rejectionReason, setRejectionReason] = useState('Documento borroso o con baja resolución.');
  const [notes, setNotes] = useState('');
  const [isRejecting, setIsRejecting] = useState(false);

  if (!caseItem) return null;

  const handleApprove = () => {
    onUpdateStatus(caseItem.id, 'APPROVED');
    onClose();
  };

  const handleRejectConfirm = () => {
    onUpdateStatus(caseItem.id, 'REJECTED', `${rejectionReason} Nota: ${notes}`);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 860, padding: 0 }}
      >
        {/* Modal Top Bar */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#0c101d'
          }}
        >
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 18, fontWeight: 800, color: '#ffffff' }}>
              Expediente: {caseItem.id}
            </span>
            <StatusBadge status={caseItem.status} riskScore={caseItem.riskScore} />
          </div>

          <button onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        {/* Applicant Header */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '16px 28px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src={caseItem.applicant.avatar}
              alt={caseItem.applicant.name}
              style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--primary)' }}
            />
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#ffffff' }}>
                {caseItem.applicant.name}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                {caseItem.applicant.email} • {caseItem.applicant.phone}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Fecha de Envío</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>{caseItem.submittedAt}</div>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div
          className="flex"
          style={{
            padding: '0 28px',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#0a0e19'
          }}
        >
          {[
            { id: 'documents', label: 'Inspección Visual Documentos' },
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

        {/* Tab Content */}
        <div style={{ padding: 28, maxHeight: '55vh', overflowY: 'auto' }}>
          {activeTab === 'documents' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {/* Front Side */}
                <div className="card-glass" style={{ padding: 16 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
                      Anverso (Frente del Documento)
                    </span>
                    <span className="badge badge-purple" style={{ fontSize: 10 }}>{caseItem.applicant.documentType}</span>
                  </div>
                  <div
                    style={{
                      height: 180,
                      backgroundColor: '#04060b',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={caseItem.documents.front}
                      alt="Front Document"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-glass" style={{ padding: 16 }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
                      Reverso (Dorso del Documento)
                    </span>
                    <span className="badge badge-purple" style={{ fontSize: 10 }}>Código de Barras / Huella</span>
                  </div>
                  <div
                    style={{
                      height: 180,
                      backgroundColor: '#04060b',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={caseItem.documents.back}
                      alt="Back Document"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>

              {/* Domicile Document */}
              <div className="card-glass" style={{ padding: 16, marginTop: 16 }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
                    Comprobante de Domicilio (Factura de Servicios o Extracto Bancario)
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--accent-green)', fontWeight: 600 }}>Dirección: {caseItem.applicant.address}</span>
                </div>
                <div style={{ height: 100, borderRadius: 6, overflow: 'hidden', backgroundColor: '#04060b' }}>
                  <img src={caseItem.documents.proofAddress} alt="Proof" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'biometrics' && (
            <div>
              <div className="flex items-center justify-center gap-8" style={{ padding: '20px 0' }}>
                {/* ID Photo */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid var(--primary)',
                      marginBottom: 8
                    }}
                  >
                    <img src={caseItem.applicant.avatar} alt="Doc Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Foto del Documento</span>
                </div>

                {/* Match indicator */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 900,
                      color: caseItem.biometrics.faceMatchConfidence > 80 ? '#10B981' : '#EF4444'
                    }}
                  >
                    {caseItem.biometrics.faceMatchConfidence}%
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block' }}>Confianza de Pareo</span>
                  <div style={{ marginTop: 8 }}>
                    <span className={caseItem.biometrics.livenessDetected ? 'badge badge-approved' : 'badge badge-rejected'}>
                      {caseItem.biometrics.livenessDetected ? 'Liveness OK' : 'Fallo de Vida'}
                    </span>
                  </div>
                </div>

                {/* Live Selfie */}
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid var(--accent-green)',
                      marginBottom: 8
                    }}
                  >
                    <img src={caseItem.documents.selfie} alt="Live Selfie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Selfie en Vivo (Cámara)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ocr' && (
            <div className="card-glass" style={{ padding: 20 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Campo</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Valor Extraído (OCR)</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Validación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>Nombre Completo</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#ffffff' }}>{caseItem.applicant.name}</td>
                    <td style={{ padding: '10px 12px', color: '#10B981' }}>Coincide 100%</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>Número de Documento</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700, color: '#ffffff' }}>{caseItem.applicant.documentNumber}</td>
                    <td style={{ padding: '10px 12px', color: '#10B981' }}>Válido</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>Fecha de Nacimiento</td>
                    <td style={{ padding: '10px 12px', color: '#ffffff' }}>{caseItem.applicant.birthDate} (+18 años)</td>
                    <td style={{ padding: '10px 12px', color: '#10B981' }}>Mayor de edad</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 12px', color: 'var(--text-muted)' }}>Nacionalidad</td>
                    <td style={{ padding: '10px 12px', color: '#ffffff' }}>{caseItem.applicant.nationality}</td>
                    <td style={{ padding: '10px 12px', color: '#10B981' }}>Aceptada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Reject Panel if active */}
        {isRejecting && (
          <div style={{ padding: '16px 28px', backgroundColor: 'rgba(239, 68, 68, 0.08)', borderTop: '1px solid #ef4444' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#EF4444', marginBottom: 8 }}>
              Selecciona el motivo de rechazo formal:
            </div>
            <select
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="form-control"
              style={{ marginBottom: 10 }}
            >
              <option value="Documento borroso o con baja resolución.">Documento borroso o con baja resolución</option>
              <option value="Inconsistencia de fecha de expiración o documento vencido.">Inconsistencia de fecha de expiración o documento vencido</option>
              <option value="Fallo en la prueba de vida o cotejo facial menor a 70%.">Fallo en la prueba de vida o cotejo facial menor a 70%</option>
              <option value="Comprobante de domicilio con antigüedad mayor a 90 días.">Comprobante de domicilio mayor a 90 días</option>
              <option value="Sospecha de alteración digital o fraude de identidad.">Sospecha de alteración digital o fraude</option>
            </select>
            <input
              type="text"
              placeholder="Nota adicional opcional para el usuario..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="form-control"
              style={{ marginBottom: 12 }}
            />
            <div className="flex items-center gap-3">
              <button onClick={handleRejectConfirm} className="btn-danger">
                Confirmar Rechazo
              </button>
              <button onClick={() => setIsRejecting(false)} className="btn-secondary">
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer Actions */}
        {!isRejecting && (
          <div
            className="flex items-center justify-between"
            style={{
              padding: '16px 28px',
              borderTop: '1px solid var(--border-color)',
              backgroundColor: '#0c101d'
            }}
          >
            <button
              onClick={() => setIsRejecting(true)}
              className="btn-danger"
              style={{ padding: '10px 20px' }}
            >
              <XCircle size={16} />
              Rechazar Solicitud
            </button>

            <div className="flex items-center gap-3">
              <button onClick={onClose} className="btn-secondary" style={{ padding: '10px 18px' }}>
                Cerrar
              </button>
              <button
                onClick={handleApprove}
                className="btn-success"
                style={{ padding: '10px 22px' }}
              >
                <CheckCircle size={16} />
                Aprobar Expediente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
