import React from 'react';
import { CheckCircle2, XCircle, FileQuestion } from 'lucide-react';
import Button from '../atoms/Button';

export default function CaseDecisionBar({
  onApprove,
  onRequestDoc,
  onStartReject,
  disabled = false
}) {
  return (
    <div
      className="flex items-center justify-between gap-3"
      style={{
        padding: '16px 24px',
        backgroundColor: '#0c101d',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <Button
        variant="danger"
        onClick={onStartReject}
        disabled={disabled}
        icon={XCircle}
      >
        Rechazar Solicitud
      </Button>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={onRequestDoc}
          disabled={disabled}
          icon={FileQuestion}
        >
          Solicitar Doc. Adicional
        </Button>

        <Button
          variant="success"
          onClick={onApprove}
          disabled={disabled}
          icon={CheckCircle2}
        >
          Aprobar Expediente
        </Button>
      </div>
    </div>
  );
}
