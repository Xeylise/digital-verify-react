import React from 'react';

/**
 * ObservationField component.
 * Textarea field capturing compliance officer notes, justification comments, and fraud observations.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.value - Controlled text content.
 * @param {Function} props.onChange - Text input change handler.
 * @param {number} [props.maxLength=1000] - Maximum permissible character length.
 * @param {boolean} [props.required=true] - Mandatory input constraint.
 * @param {string} [props.placeholder] - Hint text.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered comments input field.
 */
export default function ObservationField({
  value,
  onChange,
  maxLength = 1000,
  required = true,
  placeholder = 'Add comments about your decision, observations or document discrepancies...',
  className = '',
}) {
  const currentLength = (value || '').length;

  return (
    <div className={`mb-4 text-start ${className}`}>
      <label className="form-label fw-bold text-white mb-2" style={{ fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)' }}>
        Comments {required && <span className="text-muted" style={{ fontWeight: 500, textTransform: 'none' }}>(required)</span>}
      </label>
      <textarea
        className="form-control-custom w-100"
        style={{
          backgroundColor: '#070a14',
          border: '1px solid var(--winarena-border)',
          color: '#ffffff',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '13px',
          height: '100px',
          resize: 'none'
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
      ></textarea>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="text-muted" style={{ fontSize: '11px' }}>
          {currentLength} / {maxLength} characters
        </span>
        {currentLength >= maxLength && (
          <span className="text-warning small" style={{ fontSize: '11px' }}>Límite alcanzado</span>
        )}
      </div>
    </div>
  );
}
