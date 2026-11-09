import React from 'react';

/**
 * ProgressIndicator component.
 * Progress bar with percentage completion and dynamic step tags for KYC pipelines.
 *
 * @param {Object} props - Component properties.
 * @param {number} [props.currentStep=1] - 1-based index of the active step.
 * @param {number} [props.totalSteps=3] - Total number of required steps.
 * @param {string[]} [props.steps] - Descriptive label for each step.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered progress bar element.
 */
export default function ProgressIndicator({
  currentStep = 1,
  totalSteps = 3,
  steps = ['Información', 'Documento ID', 'Comprobante de Domicilio'],
  className = '',
}) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={`w-100 mb-4 ${className}`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="text-white small fw-bold" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          Progreso de Verificación
        </span>
        <span className="text-muted small" style={{ fontSize: '11px' }}>
          {currentStep} de {totalSteps} ({percentage}%)
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="progress" style={{ height: '6px', backgroundColor: '#131a29', borderRadius: '10px', overflow: 'hidden' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`,
            backgroundColor: 'var(--winarena-primary)',
            transition: 'width 0.4s ease'
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      {/* Optional Step Labels */}
      {steps && steps.length > 0 && (
        <div className="d-flex justify-content-between mt-2">
          {steps.map((stepLabel, index) => {
            const stepNumber = index + 1;
            const isDoneOrActive = stepNumber <= currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <span
                key={index}
                style={{
                  fontSize: '11px',
                  color: isDoneOrActive ? 'var(--winarena-primary-hover)' : 'var(--winarena-text-muted)',
                  fontWeight: isCurrent ? 'bold' : 'normal'
                }}
              >
                {stepLabel}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
