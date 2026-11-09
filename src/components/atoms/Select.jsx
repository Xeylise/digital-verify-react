import React from 'react';

export default function Select({
  options = [],
  value,
  onChange,
  disabled = false,
  hasError = false,
  style = {},
  ...props
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="form-control"
      style={{
        borderColor: hasError ? 'var(--accent-red)' : undefined,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} style={{ backgroundColor: '#111827', color: '#fff' }}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
