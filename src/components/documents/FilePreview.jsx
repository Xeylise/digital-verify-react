import React from 'react';

/**
 * FilePreview component.
 * Renders thumbnail previews, document metadata, and action controls for selected files.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.fileUrl] - Resource URL for image previews.
 * @param {string} [props.fileName] - Name of the attached file.
 * @param {('image'|'pdf')} [props.fileType='image'] - Category of the document.
 * @param {string} [props.fileSize] - Formatted file size string.
 * @param {Function} [props.onRemove] - Handler to clear or remove the attached file.
 * @param {Function} [props.onViewFullscreen] - Handler to launch full-size audit inspection.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered preview card element.
 */
export default function FilePreview({
  fileUrl,
  fileName,
  fileType = 'image',
  fileSize,
  onRemove,
  onViewFullscreen,
  className = '',
}) {
  return (
    <div
      className={`p-3 rounded-3 position-relative ${className}`}
      style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}
    >
      <div className="d-flex align-items-center gap-3">
        {fileType === 'image' && fileUrl ? (
          <img
            src={fileUrl}
            alt={fileName || 'Preview'}
            style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--winarena-border)' }}
          />
        ) : (
          <div
            style={{
              width: '56px',
              height: '56px',
              backgroundColor: '#131a29',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--winarena-primary)',
              fontSize: '22px'
            }}
          >
            <i className={fileType === 'pdf' ? 'fa-solid fa-file-pdf' : 'fa-solid fa-file-lines'}></i>
          </div>
        )}

        <div className="flex-grow-1 text-start overflow-hidden">
          <div className="fw-bold text-white text-truncate" style={{ fontSize: '13px' }}>
            {fileName || 'Documento adjunto'}
          </div>
          <div className="text-muted small" style={{ fontSize: '11px' }}>
            {fileSize || 'Formato verificado'} • <span className="text-success"><i className="fa-solid fa-check"></i> Listo</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          {onViewFullscreen && (
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary text-white"
              onClick={onViewFullscreen}
              title="Ver en detalle"
            >
              <i className="fa-solid fa-eye"></i>
            </button>
          )}
          {onRemove && (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={onRemove}
              title="Eliminar"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
