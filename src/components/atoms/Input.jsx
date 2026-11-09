import React from 'react';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  icon: Icon,
  hasError = false,
  style = {},
  ...props
}) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {Icon && (
        <div
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-dim)',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none'
          }}
        >
          <Icon size={16} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="form-control"
        style={{
          paddingLeft: Icon ? 38 : 14,
          borderColor: hasError ? 'var(--accent-red)' : undefined,
          backgroundColor: disabled ? 'rgba(255,255,255,0.02)' : undefined,
          cursor: disabled ? 'not-allowed' : 'text',
          ...style
        }}
        {...props}
      />
    </div>
  );
}
