import React from 'react';

/**
 * DocumentList component.
 * Displays the collection of verification documents associated with a KYC case.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} [props.documents] - List of document descriptor records.
 * @param {Function} [props.onSelectDocument] - Callback executed upon selecting a document record.
 * @param {number|string} [props.selectedId] - Identifier of the active document.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered document listing container.
 */
export default function DocumentList({
  documents = [
    { id: 1, name: 'ID_Front_colombia.jpg', type: 'Cédula de Ciudadanía (Frente)', status: 'Verified', date: 'May 23, 2026', url: '/img/user_avatar.jpg' },
    { id: 2, name: 'ID_Back_colombia.jpg', type: 'Cédula de Ciudadanía (Reverso)', status: 'Verified', date: 'May 23, 2026', url: '/img/user_avatar.jpg' },
    { id: 3, name: 'Proof_of_Address_Bank.pdf', type: 'Extracto Bancario Bancolombia', status: 'Pending Review', date: 'May 24, 2026', url: '/img/user_avatar.jpg' },
  ],
  onSelectDocument,
  selectedId,
  className = '',
}) {
  return (
    <div className={`document-list-container ${className}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-white mb-0" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          Documentos del Expediente ({documents.length})
        </h6>
      </div>

      <div className="d-flex flex-column gap-2">
        {documents.map((doc) => {
          const isSelected = selectedId === doc.id;
          return (
            <div
              key={doc.id}
              className={`p-3 rounded-3 d-flex align-items-center justify-content-between cursor-pointer`}
              style={{
                backgroundColor: isSelected ? 'rgba(118, 51, 239, 0.15)' : '#070a14',
                border: `1px solid ${isSelected ? 'var(--winarena-primary)' : 'var(--winarena-border)'}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => onSelectDocument && onSelectDocument(doc)}
            >
              <div className="d-flex align-items-center gap-3">
                <div style={{ color: 'var(--winarena-primary)', fontSize: '20px' }}>
                  <i className={doc.name.endsWith('.pdf') ? 'fa-solid fa-file-pdf text-danger' : 'fa-solid fa-file-image'}></i>
                </div>
                <div className="text-start">
                  <div className="fw-bold text-white small">{doc.type || doc.name}</div>
                  <div className="text-muted" style={{ fontSize: '11px' }}>{doc.name} • {doc.date}</div>
                </div>
              </div>

              <div>
                <span
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: doc.status === 'Verified' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                    color: doc.status === 'Verified' ? '#22c55e' : '#eab308',
                    fontSize: '10px'
                  }}
                >
                  {doc.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
