import React from 'react';
import TimelineStep from '../molecules/TimelineStep';
import { AlertCircle, RefreshCw, FileText } from 'lucide-react';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

export default function KycLifecycleTracker({
  status = 'PENDING',
  submittedAt = 'Hoy',
  reviewedAt,
  actionRequiredNote,
  onResolveAction
}) {
  const isApproved = status === 'APPROVED';
  const isRejected = status === 'REJECTED';
  const isActionRequired = status === 'ACTION_REQUIRED';
  const isPending = status === 'PENDING' || status === 'REVIEWING';

  const events = [
    {
      title: '1. Ingesta y Registro de Información (RF002)',
      desc: 'Formulario secuencial completado y documentos cargados por el usuario.',
      time: submittedAt,
      completed: true,
      color: '#10B981'
    },
    {
      title: '2. Extracción OCR y Cotejo Biométrico (RF003)',
      desc: 'Lectura automatizada de MRZ, coincidencia de nombres y prueba de vida facial.',
      time: 'Completado',
      completed: true,
      color: '#10B981'
    },
    {
      title: '3. Auditoría en Mesa de Control (RF004)',
      desc: isActionRequired
        ? 'El analista ha requerido documentación complementaria para continuar.'
        : 'Revisión por oficial de cumplimiento asignado.',
      time: isActionRequired ? 'Acción Requerida' : isPending ? 'En proceso actual' : 'Completado',
      completed: !isPending || isApproved || isRejected,
      active: isPending || isActionRequired,
      color: isActionRequired ? '#F59E0B' : isPending ? '#7633EF' : '#10B981'
    },
    {
      title: isApproved ? '4. Expediente Aprobado al 100%' : isRejected ? '4. Expediente Rechazado' : '4. Dictamen Final',
      desc: isApproved
        ? 'Cuenta totalmente verificada. Retiros y depósitos habilitados.'
        : isRejected
        ? 'Solicitud rechazada. Consulta la causal notificada.'
        : 'Esperando resolución final de la mesa de control.',
      time: reviewedAt || 'Pendiente',
      completed: isApproved || isRejected,
      active: false,
      color: isApproved ? '#10B981' : isRejected ? '#EF4444' : '#6B7280'
    }
  ];

  return (
    <div className="card-glass" style={{ padding: '24px 28px' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 900, color: '#ffffff' }}>
            Trazabilidad del Ciclo de Vida KYC (RF005)
          </h3>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            Monitoreo en tiempo real del estado de tu solicitud
          </span>
        </div>
      </div>

      {/* Action Required Banner if active */}
      {isActionRequired && (
        <div
          style={{
            padding: 16,
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid #F59E0B',
            marginBottom: 20
          }}
        >
          <div className="flex items-center gap-2" style={{ color: '#FBBF24', fontWeight: 800, fontSize: 13, marginBottom: 4 }}>
            <AlertCircle size={16} />
            <span>Atención Requerida: Se necesita información complementaria</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
            {actionRequiredNote || 'El oficial de control ha solicitado adjuntar un comprobante de domicilio más reciente o legible.'}
          </p>
          <Link to="/kyc/wizard">
            <Button variant="primary" size="sm" icon={RefreshCw}>
              Subir Documento Requerido Ahora
            </Button>
          </Link>
        </div>
      )}

      {/* Timeline Steps */}
      <div style={{ paddingLeft: 8 }}>
        {events.map((evt, idx) => (
          <TimelineStep
            key={idx}
            title={evt.title}
            description={evt.desc}
            timestamp={evt.time}
            isCompleted={evt.completed}
            isActive={evt.active}
            isLast={idx === events.length - 1}
            color={evt.color}
          />
        ))}
      </div>
    </div>
  );
}
