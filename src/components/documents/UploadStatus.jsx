import React from 'react';

/**
 * UploadStatus component.
 * Displays the current processing state of an uploaded document (loading, success, error, or idle).
 *
 * @param {Object} props - Component properties.
 * @param {boolean} [props.isUploading=false] - Whether the file is currently being processed.
 * @param {string} [props.fileName=''] - File name to present upon successful selection.
 * @param {string} [props.defaultMessage='Make sure all details are clearly visible.'] - Placeholder description.
 * @param {string} [props.errorMessage=''] - Error feedback message.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered upload status indicator.
 */
export default function UploadStatus({
  isUploading = false,
  fileName = '',
  defaultMessage = 'Make sure all details are clearly visible.',
  errorMessage = '',
  className = '',
}) {
  if (isUploading) {
    return (
      <div className={`upload-card-subtitle ${className}`} style={{ color: 'var(--winarena-primary)' }}>
        <i className="fa-solid fa-spinner fa-spin me-1"></i> Scanning and uploading document...
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className={`upload-card-subtitle text-danger ${className}`}>
        <i className="fa-solid fa-circle-exclamation me-1"></i> {errorMessage}
      </div>
    );
  }

  if (fileName) {
    return (
      <div className={`upload-card-subtitle ${className}`} style={{ color: 'var(--winarena-primary)' }}>
        <i className="fa-solid fa-circle-check me-1"></i> Selected: {fileName}
      </div>
    );
  }

  return (
    <div className={`upload-card-subtitle ${className}`}>
      {defaultMessage}
    </div>
  );
}
