import React from 'react';

/**
 * LoadingSpinner component.
 * Reusable animated spinner indicator for asynchronous processes and loading states.
 *
 * @param {Object} props - Component properties.
 * @param {('sm'|'md'|'lg')} [props.size='sm'] - Spinner dimension variant.
 * @param {string} [props.message=''] - Optional status label displayed beside the spinner.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered loading spinner element.
 */
export default function LoadingSpinner({ size = 'sm', message = '', className = '' }) {
  const getIconSizeClass = () => {
    switch (size) {
      case 'lg':
        return 'fs-3';
      case 'md':
        return 'fs-5';
      default:
        return 'me-2';
    }
  };

  return (
    <span className={`d-inline-flex align-items-center ${className}`}>
      <i className={`fa-solid fa-circle-notch fa-spin ${getIconSizeClass()}`}></i>
      {message && <span>{message}</span>}
    </span>
  );
}
