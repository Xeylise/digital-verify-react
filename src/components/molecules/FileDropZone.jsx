import React, { useRef, useState } from 'react';
import { UploadCloud, CheckCircle2, Trash2 } from 'lucide-react';

export default function FileDropZone({
  label,
  sublabel,
  value,
  onChange,
  accept = 'image/*',
  error
}) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onChange(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>
          {label}
        </label>
      )}
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
              alt="Uploaded file"
              style={{ width: 56, height: 40, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--border-color)' }}
            />
            <div>
              <div className="flex items-center gap-1" style={{ color: 'var(--accent-green)', fontSize: 13, fontWeight: 700 }}>
                <CheckCircle2 size={15} />
                <span>Documento cargado correctamente</span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Listo para inspección y análisis OCR</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClear}
            style={{ color: 'var(--accent-red)', padding: 6 }}
            title="Eliminar documento"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${isDragOver ? 'var(--primary)' : error ? 'var(--accent-red)' : 'var(--border-color)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '24px 16px',
            textAlign: 'center',
            backgroundColor: isDragOver ? 'rgba(118, 51, 239, 0.08)' : 'rgba(255, 255, 255, 0.02)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'rgba(118, 51, 239, 0.12)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-hover)',
              marginBottom: 8
            }}
          >
            <UploadCloud size={22} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>
            Arrastra el archivo o haz clic para seleccionarlo
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 4 }}>
            Formatos admitidos: JPG, PNG o PDF (Máximo 10 MB)
          </div>
        </div>
      )}

      {error && (
        <span style={{ fontSize: 11, color: 'var(--accent-red)', display: 'block', marginTop: 4 }}>
          {error}
        </span>
      )}
    </div>
  );
}
