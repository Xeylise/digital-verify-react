import React from 'react';
import Input from '../atoms/Input';

export default function FormField({
  label,
  sublabel,
  error,
  required = false,
  children,
  ...inputProps
}) {
  return (
    <div style={{ marginBottom: 16, width: '100%' }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: 4 }}>
          {label} {required && <span style={{ color: 'var(--accent-red)' }}>*</span>}
        </label>
      )}
      {sublabel && (
        <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
          {sublabel}
        </span>
      )}

      {children ? children : <Input hasError={!!error} required={required} {...inputProps} />}

      {error && (
        <span style={{ fontSize: 11, color: 'var(--accent-red)', display: 'block', marginTop: 4 }}>
          {error}
        </span>
      )}
    </div>
  );
}
