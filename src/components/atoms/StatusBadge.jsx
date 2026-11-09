import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, XCircle, ShieldAlert, FileQuestion } from 'lucide-react';

export default function StatusBadge({ status, riskScore }) {
  switch (status?.toUpperCase()) {
    case 'APPROVED':
    case 'APROBADO':
      return (
        <span className="badge badge-approved">
          <CheckCircle2 size={12} />
          Aprobado
        </span>
      );
    case 'PENDING':
    case 'PENDIENTE':
      return (
        <span className="badge badge-pending">
          <Clock size={12} />
          Pendiente
        </span>
      );
    case 'REVIEWING':
    case 'EN REVISIÓN':
      return (
        <span className="badge badge-purple">
          <Clock size={12} />
          En Revisión
        </span>
      );
    case 'ACTION_REQUIRED':
    case 'ACCIÓN REQUERIDA':
      return (
        <span
          className="badge"
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            color: '#FBBF24',
            border: '1px solid #F59E0B'
          }}
        >
          <FileQuestion size={12} />
          Acción Requerida
        </span>
      );
    case 'HIGH_RISK':
    case 'ALTO RIESGO':
      return (
        <span className="badge badge-high-risk">
          <ShieldAlert size={12} />
          Alto Riesgo ({riskScore || 85}%)
        </span>
      );
    case 'REJECTED':
    case 'RECHAZADO':
      return (
        <span className="badge badge-rejected">
          <XCircle size={12} />
          Rechazado
        </span>
      );
    default:
      return (
        <span className="badge badge-pending">
          <Clock size={12} />
          {status || 'Desconocido'}
        </span>
      );
  }
}
