import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, XCircle, ShieldAlert } from 'lucide-react';

export default function StatusBadge({ status, riskScore }) {
  switch (status?.toUpperCase()) {
    case 'APPROVED':
    case 'APROBADO':
      return (
        <span className="badge badge-approved">
          <CheckCircle2 size={13} />
          Aprobado
        </span>
      );
    case 'PENDING':
    case 'PENDIENTE':
      return (
        <span className="badge badge-pending">
          <Clock size={13} />
          Pendiente
        </span>
      );
    case 'REVIEWING':
    case 'EN REVISIÓN':
      return (
        <span className="badge badge-purple">
          <Clock size={13} />
          En Revisión
        </span>
      );
    case 'HIGH_RISK':
    case 'ALTO RIESGO':
      return (
        <span className="badge badge-high-risk">
          <ShieldAlert size={13} />
          Alto Riesgo ({riskScore || 85}%)
        </span>
      );
    case 'REJECTED':
    case 'RECHAZADO':
      return (
        <span className="badge badge-rejected">
          <XCircle size={13} />
          Rechazado
        </span>
      );
    default:
      return (
        <span className="badge badge-pending">
          <Clock size={13} />
          {status || 'Desconocido'}
        </span>
      );
  }
}
