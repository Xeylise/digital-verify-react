import React from 'react';

/**
 * KYCForm component.
 * Wrapper container for structured multi-step identity verification forms.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.title='Verify your identity'] - Main heading text.
 * @param {string} [props.subtitle] - Supporting instructions for regulatory compliance.
 * @param {string} [props.icon='fa-solid fa-id-card'] - Header icon class.
 * @param {React.ReactNode} props.children - Form inputs and content.
 * @param {Function} [props.onSubmit] - Optional submit handler if rendered as a native form.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered KYC container element.
 */
export default function KYCForm({
  title = 'Verify your identity',
  subtitle = 'To comply with regulations and ensure account security, please complete identity verification.',
  icon = 'fa-solid fa-id-card',
  children,
  onSubmit,
  className = '',
}) {
  return (
    <div className={`kyc-wrapper text-center ${className}`}>
      {icon && (
        <div className="kyc-icon-frame mx-auto mb-3">
          <i className={icon}></i>
        </div>
      )}
      
      {title && <h1 className="kyc-title mb-2">{title}</h1>}
      {subtitle && <p className="kyc-subtitle mb-4">{subtitle}</p>}

      <div className="kyc-form-content text-start">
        {onSubmit ? (
          <form onSubmit={onSubmit}>
            {children}
          </form>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
