import React from 'react';
import StatusBadge from '../common/StatusBadge';
import { Eye, ArrowUpDown, ShieldAlert } from 'lucide-react';

export default function QueueTable({ cases, onSelectCase }) {
  if (!cases || cases.length === 0) {
    return (
      <div className="card-glass" style={{ padding: 40, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          No hay expedientes pendientes que coincidan con los filtros seleccionados.
        </p>
      </div>
    );
  }

  return (
    <div className="card-glass" style={{ overflow: 'hidden' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
          <thead>
            <tr
              style={{
                backgroundColor: '#0c101d',
                borderBottom: '1px solid var(--border-color)',
                color: 'var(--text-muted)'
              }}
            >
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>ID Expediente</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Solicitante</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Tipo Documento</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Nivel de Riesgo</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Estado</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Fecha Envío</th>
              <th style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'right' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr
                key={c.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(118, 51, 239, 0.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={{ padding: '14px 18px', fontWeight: 800, color: 'var(--primary-hover)', fontFamily: 'var(--font-mono)' }}>
                  {c.id}
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <div className="flex items-center gap-3">
                    <img
                      src={c.applicant.avatar}
                      alt={c.applicant.name}
                      style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-color)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>{c.applicant.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{c.applicant.email}</div>
                    </div>
                  </div>
                </td>

                <td style={{ padding: '14px 18px', color: '#ffffff' }}>
                  {c.applicant.documentType}
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <span
                    className={
                      c.riskLevel === 'HIGH'
                        ? 'badge badge-high-risk'
                        : c.riskLevel === 'MEDIUM'
                        ? 'badge badge-pending'
                        : 'badge badge-approved'
                    }
                  >
                    {c.riskLevel === 'HIGH' && <ShieldAlert size={12} />}
                    {c.riskLevel} ({c.riskScore}%)
                  </span>
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <StatusBadge status={c.status} />
                </td>

                <td style={{ padding: '14px 18px', color: 'var(--text-muted)', fontSize: 12 }}>
                  {c.submittedAt}
                </td>

                <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                  <button
                    onClick={() => onSelectCase(c)}
                    className="btn-primary"
                    style={{ padding: '6px 14px', fontSize: 12 }}
                  >
                    <Eye size={13} />
                    Revisar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
