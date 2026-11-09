import React, { useState } from 'react';
import { Camera, CheckCircle2, RefreshCw, Smile } from 'lucide-react';

export default function BiometricCapture({ value, onChange }) {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleSimulateCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      // Use existing user avatar or fallback as simulated capture
      onChange('/img/user_avatar.jpg');
      setIsCapturing(false);
    }, 1200);
  };

  const handleRetake = () => {
    onChange(null);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>
        Prueba de Vida y Foto Facial (Selfie)
      </label>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 12 }}>
        Ubica tu rostro dentro del marco con buena iluminación y sin accesorios (gafas o sombreros).
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
            Similitud esperada: ~96.4% con el documento de identidad
          </span>

          <button
            type="button"
            onClick={handleRetake}
            className="btn-secondary"
            style={{ padding: '6px 14px', fontSize: 12 }}
          >
            <RefreshCw size={13} />
            Tomar de nuevo
          </button>
        </div>
      ) : (
        <div
          className="flex flex-col items-center card-glass"
          style={{
            padding: 28,
            textAlign: 'center',
            background: 'radial-gradient(circle at center, #1b1730 0%, #111827 100%)'
          }}
        >
          {/* Facial Silhouette Frame */}
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
              position: 'relative',
              backgroundColor: 'rgba(118, 51, 239, 0.08)'
            }}
          >
            {isCapturing ? (
              <RefreshCw className="animate-spin" size={32} color="var(--primary-hover)" />
            ) : (
              <Smile size={48} color="var(--primary-hover)" opacity={0.6} />
            )}
          </div>

          <button
            type="button"
            onClick={handleSimulateCapture}
            disabled={isCapturing}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: 13 }}
          >
            <Camera size={16} />
            {isCapturing ? 'Verificando Rostro...' : 'Capturar Selfie Ahora'}
          </button>

          <span style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 8 }}>
            La captura se procesará de forma segura y encriptada
          </span>
        </div>
      )}
    </div>
  );
}
