import React from 'react';

/**
 * KYCStep component.
 * Visual card representing an individual phase within the verification process.
 *
 * @param {Object} props - Component properties.
 * @param {number|string} [props.stepNumber] - Ordinal index of the verification step.
 * @param {string} props.title - Step title label.
 * @param {string} [props.subtitle] - Step summary description.
 * @param {string} [props.icon] - FontAwesome icon class.
 * @param {boolean} [props.isActive=false] - Whether this step is currently selected.
 * @param {boolean} [props.isCompleted=false] - Whether this step has been completed.
 * @param {Function} [props.onClick] - Click handler to navigate to this step.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered step card element.
 */
export default function KYCStep({
  stepNumber,
  title,
  subtitle,
  icon,
  isActive = false,
  isCompleted = false,
  onClick,
  className = '',
}) {
  return (
    <div
      className={`upload-card mb-3 ${isActive ? 'active-step-border' : ''} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', transition: 'all 0.2s ease' }}
    >
      <div
        className="upload-card-icon"
        style={isCompleted || isActive ? { color: 'var(--winarena-primary)', borderColor: 'var(--winarena-primary)' } : undefined}
      >
        {isCompleted ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className={icon || 'fa-regular fa-circle'}></i>
        )}
      </div>
      <div className="upload-card-content text-start">
        <div className="upload-card-title d-flex align-items-center gap-2">
          <span>{title}</span>
          {stepNumber && (
            <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(118, 51, 239, 0.2)', color: 'var(--winarena-primary-hover)', fontSize: '10px' }}>
              Paso {stepNumber}
            </span>
          )}
        </div>
        {subtitle && <div className="upload-card-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}
