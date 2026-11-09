import React from 'react';
import { useKyc } from '../../context/KycContext';
import KycProgressBar from '../kyc/KycProgressBar';
import FormField from '../molecules/FormField';
import Select from '../atoms/Select';
import FileDropZone from '../molecules/FileDropZone';
import BiometricCaptureGuide from '../molecules/BiometricCaptureGuide';
import Button from '../atoms/Button';
import { Shield, CheckCircle2, ArrowRight, ArrowLeft, Send, AlertCircle, FileText } from 'lucide-react';

export default function KycSequentialStepper({ onComplete }) {
  const {
    currentStep,
    formData,
    updateField,
    nextStep,
    prevStep,
    submitApplication,
    isSubmitting
  } = useKyc();

  const handleFinish = async () => {
    await submitApplication();
    if (onComplete) onComplete();
  };

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <KycProgressBar currentStep={currentStep} />

      <div className="card-glass" style={{ padding: '32px 36px' }}>
        {/* PASO 1: Inicio / Requisitos (RF002) */}
        {currentStep === 1 && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: 'rgba(118, 51, 239, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-hover)'
                }}
              >
                <Shield size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff' }}>
                  Verificación de Identidad Secuencial (RF002)
                </h2>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                  Cumplimiento normativo para la prevención de suplantación y fraude.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3" style={{ margin: '24px 0' }}>
              {[
                { title: '1. Documento Oficial Vigente', desc: 'Cédula de Ciudadanía, Cédula de Extranjería o Pasaporte en formato nítido.' },
                { title: '2. Cotejo Biométrico Facial', desc: 'Captura de selfie en vivo para validar que el documento te pertenece.' },
                { title: '3. Comprobante de Domicilio', desc: 'Factura de servicios o extracto bancario con vigencia menor a 90 días.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                  style={{
                    padding: 14,
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <CheckCircle2 size={18} color="#10B981" style={{ marginTop: 2 }} />
                  <div>
                    <strong style={{ fontSize: 14, color: '#ffffff', display: 'block' }}>{item.title}</strong>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-2"
              style={{
                padding: '12px 16px',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: 'var(--radius-md)',
                color: '#fbbf24',
                fontSize: 12,
                marginBottom: 28
              }}
            >
              <AlertCircle size={16} />
              <span>Tus datos son encriptados de extremo a extremo conforme a la Ley de Protección de Datos Personales.</span>
            </div>

            <div className="flex justify-end">
              <Button variant="primary" onClick={nextStep} icon={ArrowRight}>
                Comenzar Verificación
              </Button>
            </div>
          </div>
        )}

        {/* PASO 2: Documento y Selfie (RF002, RF003) */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
              Paso 2: Registro de Información y Documentos (RF002, RF003)
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
              Selecciona tu tipo de documento, digita el número y adjunta las fotos frontal y posterior.
            </p>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 6 }}>
                Tipo de Documento
              </label>
              <Select
                value={formData.documentType}
                onChange={(e) => updateField('documentType', e.target.value)}
                options={[
                  { value: 'Cédula de Ciudadanía', label: 'Cédula de Ciudadanía (Colombia)' },
                  { value: 'Cédula de Extranjería', label: 'Cédula de Extranjería' },
                  { value: 'Pasaporte', label: 'Pasaporte Internacional' }
                ]}
              />
            </div>

            <FormField
              label="Número de Identificación"
              required
              placeholder="Ej. 1.020.849.214"
              value={formData.documentNumber}
              onChange={(e) => updateField('documentNumber', e.target.value)}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <FileDropZone
                label="Anverso del Documento"
                sublabel="Lado con fotografía y nombres"
                value={formData.frontImage}
                onChange={(val) => updateField('frontImage', val)}
              />
              <FileDropZone
                label="Reverso del Documento"
                sublabel="Lado con código de barras y huella"
                value={formData.backImage}
                onChange={(val) => updateField('backImage', val)}
              />
            </div>

            <BiometricCaptureGuide
              value={formData.selfieImage}
              onChange={(val) => updateField('selfieImage', val)}
            />

            <div className="flex items-center justify-between" style={{ marginTop: 24 }}>
              <Button variant="secondary" onClick={prevStep} icon={ArrowLeft}>
                Atrás
              </Button>
              <Button variant="primary" onClick={nextStep} icon={ArrowRight}>
                Continuar a Domicilio
              </Button>
            </div>
          </div>
        )}

        {/* PASO 3: Comprobante de Domicilio (RF003) */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
              Paso 3: Comprobante de Residencia (RF003)
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
              Suministra tu dirección actual y una factura o extracto bancario con vigencia inferior a 90 días.
            </p>

            <FormField
              label="Dirección Residencial Completa"
              required
              placeholder="Ej. Cra 15 #85-32 Apto 402, Bogotá D.C."
              value={formData.address}
              onChange={(e) => updateField('address', e.target.value)}
            />

            <FileDropZone
              label="Cargar Soporte de Domicilio"
              sublabel="Factura de servicios públicos o certificación bancaria (PDF/JPG)"
              value={formData.proofAddressImage}
              onChange={(val) => updateField('proofAddressImage', val)}
            />

            <div
              className="card-glass"
              style={{
                padding: 16,
                backgroundColor: 'rgba(118, 51, 239, 0.05)',
                border: '1px solid rgba(118, 51, 239, 0.25)',
                marginTop: 20,
                fontSize: 13
              }}
            >
              <div className="flex items-center gap-2" style={{ fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>
                <FileText size={16} color="var(--primary-hover)" />
                <span>Resumen de Expediente para Envío a Mesa de Control</span>
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                Tipo: <strong>{formData.documentType}</strong> | Documento: <strong>{formData.documentNumber || 'Pendiente'}</strong>
              </div>
            </div>

            <div className="flex items-center justify-between" style={{ marginTop: 24 }}>
              <Button variant="secondary" onClick={prevStep} icon={ArrowLeft}>
                Atrás
              </Button>
              <Button
                variant="primary"
                onClick={handleFinish}
                loading={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? 'Enviando Solicitud...' : 'Enviar para Revisión (RF002)'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
