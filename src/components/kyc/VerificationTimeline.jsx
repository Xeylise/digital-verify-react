import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export default function VerificationTimeline({ status = 'PENDING', submittedAt = 'Hoy', reviewedAt }) {
  const isApproved = status === 'APPROVED';
  const isRejected = status === 'REJECTED';
  const isPending = status === 'PENDING' || status === 'REVIEWING';

  const timelineEvents = [
    {
      title: 'Solicitud Enviada',
      desc: 'Documentos e información cargados por el usuario.',
      time: submittedAt,
      completed: true,
      color: '#10B981'
    },
    {
      title: 'Extracción OCR y Biometría Facial',
      desc: 'Lectura de datos de cédula y cotejo biométrico automatizado.',
      time: 'Completado en 45s',
      completed: true,
      color: '#10B981'
    },
    {
      title: 'Inspección de Oficial de Cumplimiento',
      desc: 'Mesa de control verificando autenticidad y antecedentes.',
      time: isPending ? 'En proceso actual' : 'Completado',
      completed: !isPending || isApproved || isRejected,
      active: isPending,
      color: isPending ? '#F59E0B' : '#10B981'
    },
    {
      title: isApproved ? 'Cuenta Totalmente Verificada' : isRejected ? 'Solicitud Rechazada' : 'Dictamen Final',
      desc: isApproved
        ? 'Límites de depósito y retiro habilitados sin restricciones.'
        : isRejected
        ? 'Se requiere corrección o reenvío de documentos.'
        : 'Pendiente de aprobación por analista.',
      time: reviewedAt || 'Esperando resolución',
      completed: isApproved || isRejected,
      active: false,
      color: isApproved ? '#10B981' : isRejected ? '#EF4444' : '#6B7280'
    }
  ];

  return (
    <div className="card-glass" style={{ padding: '24px 28px' }}>
      <h3 style={{ fontSize: 16, fontWeight: 800, color: '#ffffff', marginBottom: 20 }}>
        Progreso de tu Verificación
      </h3>

      <div style={{ position: 'relative', paddingLeft: 12 }}>
        {timelineEvents.map((evt, idx) => {
          const isLast = idx === timelineEvents.length - 1;

          return (
            <div key={idx} style={{ position: 'relative', paddingBottom: isLast ? 0 : 28 }}>
              {/* Connecting vertical line */}
              {!isLast && (
                <div
                  style={{
                    position: 'absolute',
                    left: 11,
                    top: 24,
                    bottom: 0,
                    width: 2,
                    backgroundColor: evt.completed ? '#10B981' : 'var(--border-color)'
                  }}
                />
              )}

              <div className="flex items-start gap-4">
                {/* Node icon */}
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-card)',
                    border: `2px solid ${evt.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    color: evt.color
                  }}
                >
                  {evt.completed ? (
                    <CheckCircle2 size={14} />
                  ) : evt.active ? (
                    <Clock size={14} />
                  ) : (
                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--text-dim)' }} />
                  )}
                </div>

                {/* Event details */}
                <div style={{ flex: 1 }}>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#ffffff' }}>
                      {evt.title}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {evt.time}
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                    {evt.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
