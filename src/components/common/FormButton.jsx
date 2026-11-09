import React from 'react';
import LoadingSpinner from './LoadingSpinner';

/**
 * FormButton component.
 * Reusable action button supporting multiple visual variants and integrated loading spinners.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Button content or text.
 * @param {('submit'|'button'|'reset')} [props.type='submit'] - HTML button type attribute.
 * @param {('primary'|'outline'|'kyc'|'secondary')} [props.variant='primary'] - Styling theme.
 * @param {boolean} [props.isLoading=false] - Whether to show the loading spinner state.
 * @param {string} [props.loadingText=''] - Label displayed when isLoading is true.
 * @param {boolean} [props.disabled=false] - Disabled attribute.
 * @param {Function} [props.onClick] - Click event callback.
 * @param {string} [props.className=''] - Additional CSS class names.
 * @param {Object} [props.style={}] - Inline styles object.
 * @returns {JSX.Element} The rendered button element.
 */
export default function FormButton({
  children,
  type = 'submit',
  variant = 'primary',
  isLoading = false,
  loadingText = '',
  disabled = false,
  onClick,
  className = '',
  style = {},
  ...props
}) {
  /**
   * Resolves the CSS class based on the selected variant.
   *
   * @returns {string} The computed class name.
   */
  const getButtonClass = () => {
    if (variant === 'kyc') return 'btn-kyc-primary';
    if (variant === 'outline') return 'landing-btn-outline';
    return 'btn-login-submit';
  };

  return (
    <button
      type={type}
      className={`${getButtonClass()} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      style={style}
      {...props}
    >
      {isLoading ? (
        <LoadingSpinner message={loadingText || 'Cargando...'} />
      ) : (
        children
      )}
    </button>
  );
}
