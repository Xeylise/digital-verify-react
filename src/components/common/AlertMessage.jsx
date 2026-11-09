import React from 'react';

/**
 * AlertMessage component.
 * Displays informative, warning, success, or error status boxes with appropriate icons.
 *
 * @param {Object} props - Component properties.
 * @param {('success'|'warning'|'danger'|'info')} [props.type='info'] - Severity variant.
 * @param {string} props.message - Descriptive alert message.
 * @param {string} [props.title] - Optional bold title for the alert.
 * @param {Function} [props.onClose] - Optional dismiss handler.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered alert box element.
 */
export default function AlertMessage({
  type = 'info',
  message,
  title,
  onClose,
  className = '',
}) {
  /**
   * Returns FontAwesome icon class for the specified severity level.
   *
   * @returns {string} Icon class string.
   */
  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fa-circle-check text-success';
      case 'danger':
        return 'fa-circle-exclamation text-danger';
      case 'warning':
        return 'fa-triangle-exclamation text-warning';
      default:
        return 'fa-circle-info text-info';
    }
  };

  /**
   * Resolves translucent border color based on alert type.
   *
   * @returns {string} RGBA border color.
   */
  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'rgba(34, 197, 94, 0.3)';
      case 'danger':
        return 'rgba(239, 68, 68, 0.3)';
      case 'warning':
        return 'rgba(245, 158, 11, 0.3)';
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  return (
    <div
      className={`d-flex align-items-start gap-3 p-3 rounded-3 mb-3 ${className}`}
      style={{
        backgroundColor: '#0c1220',
        border: `1px solid ${getBorderColor()}`,
        color: '#ffffff',
      }}
    >
      <i className={`fa-solid ${getIcon()} fs-5 mt-1`}></i>
      <div className="flex-grow-1 text-start">
        {title && <h6 className="fw-bold mb-1" style={{ fontSize: '13px' }}>{title}</h6>}
        <div style={{ fontSize: '12px', color: 'var(--winarena-text-muted)' }}>{message}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="btn-close btn-close-white"
          onClick={onClose}
          style={{ fontSize: '10px' }}
        ></button>
      )}
    </div>
  );
}
