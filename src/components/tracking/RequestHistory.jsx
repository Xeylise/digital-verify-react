import React from 'react';

/**
 * RequestHistory component.
 * Audit timeline displaying chronological events and state transitions logged for a case.
 *
 * @param {Object} props - Component properties.
 * @param {Array<{id: number, action: string, user: string, date: string, icon: string, note: string}>} [props.events] - Log entries.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered audit trail element.
 */
export default function RequestHistory({
  events = [
    { id: 1, action: 'Documentos recibidos', user: 'Cliente (Portal)', date: 'May 23, 2026 - 10:14 AM', icon: 'fa-solid fa-file-arrow-up', note: 'Frente y reverso de cédula cargados.' },
    { id: 2, action: 'Validación Biométrica OCR', user: 'Motor Digital Verify', date: 'May 23, 2026 - 10:15 AM', icon: 'fa-solid fa-robot', note: 'Coincidencia OCR 98.4%. Sin alertas de lista restrictiva.' },
    { id: 3, action: 'Caso asignado a analista', user: 'Supervisor Automático', date: 'May 23, 2026 - 10:20 AM', icon: 'fa-solid fa-user-check', note: 'Asignado a Paola Castro para auditoría.' },
    { id: 4, action: 'Revisión en proceso', user: 'Paola Castro (Analista)', date: 'May 24, 2026 - 09:00 AM', icon: 'fa-solid fa-magnifying-glass', note: 'Inspección de comprobante de domicilio.' },
  ],
  className = '',
}) {
  return (
    <div className={`p-4 rounded-4 ${className}`} style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
      <h6 className="fw-bold text-white mb-3 text-start" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
        <i className="fa-solid fa-clock-rotate-left me-2 text-primary"></i> Historial de Auditoría y Trazabilidad
      </h6>

      <div className="d-flex flex-column gap-3 text-start">
        {events.map((eventItem) => (
          <div key={eventItem.id} className="d-flex align-items-start gap-3 border-bottom border-secondary border-opacity-10 pb-3">
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(118, 51, 239, 0.15)',
                color: 'var(--winarena-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <i className={eventItem.icon}></i>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <span className="fw-bold text-white small">{eventItem.action}</span>
                <span className="text-muted" style={{ fontSize: '11px' }}>{eventItem.date}</span>
              </div>
              <div className="text-muted small mt-1" style={{ fontSize: '12px' }}>
                <span className="text-white opacity-75">{eventItem.user}:</span> {eventItem.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
