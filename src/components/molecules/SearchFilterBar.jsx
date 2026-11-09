import React from 'react';
import { Search, Filter } from 'lucide-react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,
  caseTypeFilter,
  onCaseTypeChange,
  statusFilter,
  onStatusChange
}) {
  return (
    <div
      className="card-glass flex flex-col md:flex-row items-center justify-between gap-3"
      style={{ padding: '14px 18px', marginBottom: 20 }}
    >
      {/* Search Input */}
      <div style={{ flex: 1, minWidth: 260 }}>
        <Input
          placeholder="Buscar por ID, solicitante, correo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={Search}
        />
      </div>

      <div className="flex items-center gap-3" style={{ width: '100%', maxWidth: 440 }}>
        {/* Case Type Filter (RF004: Proactive KYC vs Fraud Review) */}
        <div style={{ flex: 1 }}>
          <Select
            value={caseTypeFilter}
            onChange={(e) => onCaseTypeChange(e.target.value)}
            options={[
              { value: 'ALL', label: 'Tipo: Todos los Casos' },
              { value: 'PROACTIVE_KYC', label: 'Proactive KYC' },
              { value: 'FRAUD_REVIEW', label: 'Fraud Review' }
            ]}
          />
        </div>

        {/* Status Filter (RF005) */}
        <div style={{ flex: 1 }}>
          <Select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            options={[
              { value: 'ALL', label: 'Estado: Todos' },
              { value: 'PENDING', label: 'Pendientes' },
              { value: 'REVIEWING', label: 'En Revisión' },
              { value: 'ACTION_REQUIRED', label: 'Acción Requerida' },
              { value: 'APPROVED', label: 'Aprobados' },
              { value: 'REJECTED', label: 'Rechazados' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
