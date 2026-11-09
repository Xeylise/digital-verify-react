import React, { useState } from 'react';
import { Camera, CheckCircle2, RefreshCw, Smile, Lightbulb } from 'lucide-react';
import Button from '../atoms/Button';

export default function BiometricCaptureGuide({ value, onChange }) {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleSimulateCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      onChange('/img/user_avatar.jpg');
      setIsCapturing(false);
    }, 1200);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>
        Prueba de Vida y Foto Facial (Selfie)
      </label>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 12 }}>
        Enfoca tu rostro sin accesorios ni reflejos de luz para el cotejo biométrico automático.
      </span>

      {value ? (
        <div
          className="flex flex-col items-center card-glass"
          style={{ padding: 20, textAlign: 'center', borderColor: 'var(--accent-green)' }}
        >
          <div
            style={{
              position: 'relative',
              width: 130,
              height: 130,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-green)',
              marginBottom: 12
            }}
          >
            <img src={value} alt="Biometric Face" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="flex items-center gap-1" style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>
            <CheckCircle2 size={16} />
            <span>Biometría Facial Capturada y Validada</span>
          </div>
          <span style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 12 }}>
            Similitud esperada: ~96.4% frente a la fotografía del documento
          </span>

          <Button variant="secondary" size="sm" onClick={() => onChange(null)} icon={RefreshCw}>
            Tomar de nuevo
          </Button>
        </div>
      ) : (
        <div
          className="flex flex-col items-center card-glass"
          style={{
            padding: 24,
            textAlign: 'center',
            background: 'radial-gradient(circle at center, #1b1730 0%, #111827 100%)'
          }}
        >
          {/* Oval Guide */}
          <div
            style={{
              width: 140,
              height: 170,
              border: '2px dashed var(--primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              backgroundColor: 'rgba(118, 51, 239, 0.08)'
            }}
          >
            {isCapturing ? (
              <RefreshCw className="animate-spin" size={32} color="var(--primary-hover)" />
            ) : (
              <Smile size={48} color="var(--primary-hover)" opacity={0.6} />
            )}
          </div>

          <Button
            variant="primary"
            onClick={handleSimulateCapture}
            loading={isCapturing}
            icon={Camera}
          >
            {isCapturing ? 'Verificando Rostro...' : 'Capturar Selfie Ahora'}
          </Button>

          <div className="flex items-center gap-2" style={{ marginTop: 12, fontSize: 11, color: 'var(--text-dim)' }}>
            <Lightbulb size={13} color="var(--primary-hover)" />
            <span>Ubícate en un lugar con buena iluminación frontal</span>
          </div>
        </div>
      )}
    </div>
  );
}
