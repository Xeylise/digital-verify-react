import React, { useState } from 'react';
import Button from '../atoms/Button';
import Select from '../atoms/Select';
import FormField from '../molecules/FormField';
import { AlertTriangle, FileQuestion, XCircle, Send } from 'lucide-react';

export default function CaseDecisionDrawer({ mode = 'reject', onClose, onConfirm }) {
  const isReject = mode === 'reject';

  const [selectedReason, setSelectedReason] = useState(
    isReject
      ? 'Documento borroso o con baja resolución.'
      : 'Factura de servicios no legible. Por favor adjunte un PDF o fotografía clara con fecha visible.'
  );
  const [customNote, setCustomNote] = useState('');

  const handleConfirm = () => {
    const fullText = customNote ? `${selectedReason} - Nota adicional: ${customNote}` : selectedReason;
    onConfirm(fullText);
  };

  return (
    <div
      style={{
        padding: '18px 24px',
        backgroundColor: isReject ? 'rgba(239, 68, 68, 0.08)' : 'rgba(245, 158, 11, 0.08)',
        borderTop: `1px solid ${isReject ? 'var(--accent-red)' : 'var(--accent-amber)'}`
      }}
    >
      <div className="flex items-center gap-2" style={{ marginBottom: 12 }}>
        {isReject ? <XCircle size={18} color="#EF4444" /> : <FileQuestion size={18} color="#F59E0B" />}
        <span style={{ fontSize: 14, fontWeight: 800, color: '#ffffff' }}>
          {isReject ? 'Confirmar Rechazo Normativo del Expediente (RF004)' : 'Solicitud de Documentación Adicional (RF004, RF006)'}
        </span>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>
          {isReject ? 'Causal Estándar de Rechazo:' : 'Motivo del Requerimiento:'}
        </label>
        {isReject ? (
          <Select
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
            options={[
              { value: 'Documento borroso o con baja resolución.', label: 'Documento borroso o con baja resolución' },
              { value: 'Inconsistencia de fecha de expiración o documento vencido.', label: 'Inconsistencia de fecha de expiración o documento vencido' },
              { value: 'Fallo en la prueba de vida o cotejo facial menor a 70%.', label: 'Fallo en la prueba de vida o cotejo facial menor a 70%' },
              { value: 'Comprobante de domicilio con antigüedad mayor a 90 días.', label: 'Comprobante de domicilio mayor a 90 días' },
              { value: 'Sospecha de alteración digital o fraude de identidad.', label: 'Sospecha de alteración digital o fraude (Fraud Review)' }
            ]}
          />
        ) : (
          <Select
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
            options={[
              { value: 'Factura de servicios no legible. Adjunte un PDF o fotografía clara con fecha visible.', label: 'Factura de servicios no legible / borrosa' },
              { value: 'Comprobante de domicilio vencido. Adjunte soporte menor a 90 días.', label: 'Comprobante de domicilio vencido (+90 días)' },
              { value: 'Reverso de documento incompleto o con código de barras cortado.', label: 'Reverso de cédula incompleto o cortado' },
              { value: 'Se requiere fotografía de rostro sin accesorios (lentes/gorra).', label: 'Selfie con accesorios u obstrucciones' }
            ]}
          />
        )}
      </div>

      <FormField
        label="Observación o instrucción adicional para el usuario:"
        placeholder="Ej. Favor asegurarse de que el código de barras y la fecha de expedición sean legibles..."
        value={customNote}
        onChange={(e) => setCustomNote(e.target.value)}
      />

      <div className="flex items-center justify-end gap-3" style={{ marginTop: 12 }}>
        <Button variant="secondary" size="sm" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant={isReject ? 'danger' : 'primary'}
          size="sm"
          onClick={handleConfirm}
          icon={Send}
        >
          {isReject ? 'Emitir Rechazo Definitivo' : 'Enviar Solicitud al Usuario'}
        </Button>
      </div>
    </div>
  );
}
