import React, { useRef } from 'react';
import { UploadCloud, CheckCircle, Trash2, FileText } from 'lucide-react';

export default function DocumentUploader({ label, sublabel, value, onChange, accept = 'image/*' }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>
        {label}
      </label>
      {sublabel && (
        <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
          {sublabel}
        </span>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={accept}
        style={{ display: 'none' }}
      />

      {value ? (
        <div
          className="flex items-center justify-between"
          style={{
            backgroundColor: 'var(--bg-dark)',
            border: '1.5px solid var(--accent-green)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px'
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src={value}
              alt="Preview"
              style={{ width: 56, height: 40, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--border-color)' }}
            />
            <div>
              <div className="flex items-center gap-1" style={{ color: 'var(--accent-green)', fontSize: 13, fontWeight: 700 }}>
                <CheckCircle size={15} />
                <span>Archivo cargado con éxito</span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Listo para validación OCR</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClear}
            style={{ color: 'var(--accent-red)', padding: 6 }}
            title="Eliminar y volver a subir"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: '2px dashed var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 16px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.backgroundColor = 'rgba(118, 51, 239, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'rgba(118, 51, 239, 0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-hover)',
              marginBottom: 8
            }}
          >
            <UploadCloud size={22} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#ffffff' }}>
            Haz clic o arrastra tu archivo aquí
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 4 }}>
            Formatos soportados: JPG, PNG, PDF (Máx. 10MB)
          </div>
        </div>
      )}
    </div>
  );
}
