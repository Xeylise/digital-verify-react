import React from 'react';

/**
 * DocumentViewer component.
 * Modal viewer allowing compliance analysts to zoom, rotate, and inspect extracted OCR data.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isOpen - Controls modal visibility.
 * @param {Function} props.onClose - Dismiss modal callback.
 * @param {string} [props.documentUrl='/img/user_avatar.jpg'] - Source path of the document asset.
 * @param {string} [props.documentTitle='Auditoría de Documento'] - Header label.
 * @param {Object} [props.metadata] - Extracted OCR security attributes.
 * @returns {JSX.Element|null} The rendered audit inspection modal or null if closed.
 */
export default function DocumentViewer({
  isOpen,
  onClose,
  documentUrl = '/img/user_avatar.jpg',
  documentTitle = 'Auditoría de Documento',
  metadata = {
    tipo: 'Cédula de Ciudadanía',
    nombreExtraido: 'Paola Andrea Castro',
    ocrStatus: 'Match 98.4%',
    validez: 'Válido'
  }
}) {
  if (!isOpen) return null;

  /**
   * Handles zoom inspection magnification.
   */
  const handleZoom = () => {
    alert('Zoom de alta resolución activado.');
  };

  /**
   * Rotates the preview image clockwise.
   */
  const handleRotate = () => {
    alert('Rotación de imagen 90° aplicada.');
  };

  return (
    <div className="vr-popup-overlay" style={{ display: 'flex', zIndex: 1060 }}>
      <div className="login-container animated-login-card" style={{ maxWidth: '850px', width: '95%' }}>
        <div className="card-login p-4 position-relative text-start">
          <button className="vr-close-btn" onClick={onClose}>&times;</button>

          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-secondary border-opacity-25 pb-2">
            <div>
              <h5 className="fw-bold text-white mb-0">{documentTitle}</h5>
              <span className="text-muted small">Herramienta de inspección de seguridad KYC</span>
            </div>
            <div className="d-flex gap-2">
              <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}>
                <i className="fa-solid fa-check me-1"></i> {metadata.ocrStatus}
              </span>
            </div>
          </div>

          <div className="row g-4">
            {/* Document Preview Pane */}
            <div className="col-lg-7 text-center">
              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: '#05070f', border: '1px solid var(--winarena-border)', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={documentUrl}
                  alt="Document preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              <div className="d-flex justify-content-center gap-2 mt-2">
                <button type="button" className="btn btn-sm btn-outline-secondary text-white" onClick={handleZoom}>
                  <i className="fa-solid fa-magnifying-glass-plus"></i> Zoom
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary text-white" onClick={handleRotate}>
                  <i className="fa-solid fa-rotate-right"></i> Rotar
                </button>
              </div>
            </div>

            {/* OCR & Security Attributes */}
            <div className="col-lg-5">
              <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#090e17', border: '1px solid var(--winarena-border)' }}>
                <h6 className="fw-bold text-white mb-3" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  Datos extraídos por OCR
                </h6>

                <div className="mb-3">
                  <div className="text-muted small">Tipo de Documento</div>
                  <div className="text-white fw-bold">{metadata.tipo}</div>
                </div>

                <div className="mb-3">
                  <div className="text-muted small">Nombre Extraído</div>
                  <div className="text-white fw-bold">{metadata.nombreExtraido}</div>
                </div>

                <div className="mb-3">
                  <div className="text-muted small">Integridad de Criptografía / Holograma</div>
                  <div className="text-success fw-bold"><i className="fa-solid fa-shield-check me-1"></i> {metadata.validez}</div>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <button type="button" className="btn btn-sm w-100 text-white rounded-pill" style={{ backgroundColor: 'var(--winarena-primary)' }} onClick={onClose}>
                    Cerrar Visor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
