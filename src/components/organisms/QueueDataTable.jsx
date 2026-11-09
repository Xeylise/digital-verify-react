import React from 'react';
import StatusBadge from '../atoms/StatusBadge';
import CaseTypeBadge from '../atoms/CaseTypeBadge';
import PriorityBadge from '../atoms/PriorityBadge';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import { Eye, ShieldAlert } from 'lucide-react';

export default function QueueDataTable({ cases, onSelectCase }) {
  if (!cases || cases.length === 0) {
    return (
      <div className="card-glass" style={{ padding: 48, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          No se encontraron solicitudes que coincidan con los criterios de búsqueda o filtrado.
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
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Tipo de Caso (RF004)</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Solicitante</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Prioridad (RF005)</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Responsable (RF004)</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Estado (RF005)</th>
              <th style={{ padding: '14px 18px', fontWeight: 700 }}>Fecha</th>
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
                  <CaseTypeBadge type={c.caseType} />
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <div className="flex items-center gap-3">
                    <Avatar src={c.applicant.avatar} alt={c.applicant.name} size={32} />
                    <div>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>{c.applicant.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{c.applicant.email}</div>
                    </div>
                  </div>
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <PriorityBadge priority={c.priority} />
                </td>

                <td style={{ padding: '14px 18px', color: '#ffffff', fontSize: 12 }}>
                  <span style={{ color: c.assignedTo === 'Sin Asignar' ? 'var(--text-dim)' : 'var(--primary-hover)', fontWeight: 600 }}>
                    {c.assignedTo || 'Sin Asignar'}
                  </span>
                </td>

                <td style={{ padding: '14px 18px' }}>
                  <StatusBadge status={c.status} riskScore={c.riskScore} />
                </td>

                <td style={{ padding: '14px 18px', color: 'var(--text-muted)', fontSize: 12 }}>
                  {c.submittedAt}
                </td>

                <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onSelectCase(c)}
                    icon={Eye}
                  >
                    Revisar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
