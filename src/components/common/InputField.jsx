import React from 'react';

/**
 * InputField component.
 * Reusable form input component supporting text, email, password, and custom icons.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.label] - Field label text.
 * @param {string} props.id - HTML element identifier.
 * @param {string} [props.type='text'] - Input type (text, email, password, date).
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string|number} props.value - Controlled input value.
 * @param {Function} props.onChange - Change handler callback.
 * @param {boolean} [props.required=false] - Whether the field is mandatory.
 * @param {string} [props.error=''] - Error message to display.
 * @param {string} [props.helperText=''] - Instructional text below the input.
 * @param {React.ReactNode} [props.iconRight=null] - Optional icon or button element placed on the right side.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered input field.
 */
export default function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error = '',
  helperText = '',
  iconRight = null,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div className={`mb-3 text-start ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--winarena-text-muted)' }}>
          {label}
        </label>
      )}
      <div className="input-group-custom position-relative">
        <input
          id={id}
          type={type}
          className={`form-control-custom w-100 ${error ? 'is-invalid' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          {...props}
        />
        {iconRight}
      </div>
      {error && <div className="text-danger small mt-1" style={{ fontSize: '12px' }}>{error}</div>}
      {helperText && !error && <div className="text-muted small mt-1" style={{ fontSize: '11px' }}>{helperText}</div>}
    </div>
  );
}
