import React, { useRef } from 'react';
import UploadStatus from './UploadStatus';

/**
 * DocumentUpload component.
 * Interactive document drop zone allowing users to select, scan, and upload identity files.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - Document card heading.
 * @param {string} [props.subtitle] - Instructional subtitle.
 * @param {string} [props.icon='fa-regular fa-address-card'] - Card icon class.
 * @param {string} [props.fileName=''] - Name of the selected file if present.
 * @param {boolean} [props.isUploading=false] - Whether an upload or scan operation is active.
 * @param {('pending'|'uploading'|'uploaded'|'error')} [props.status='pending'] - Current upload status.
 * @param {string} [props.accept='image/*,application/pdf'] - Accepted file MIME types.
 * @param {Function} [props.onFileSelect] - Callback triggered with the chosen File object.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered file upload zone.
 */
export default function DocumentUpload({
  title,
  subtitle,
  icon = 'fa-regular fa-address-card',
  fileName = '',
  isUploading = false,
  status = 'pending',
  accept = 'image/*,application/pdf',
  onFileSelect,
  className = '',
}) {
  const fileInputRef = useRef(null);

  /**
   * Delegates the click event on the card container to the hidden file input.
   */
  const handleCardClick = () => {
    if (!isUploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /**
   * Captures the input change event and delivers the selected file to the parent handler.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file change event.
   */
  const handleInputChange = (event) => {
    if (event.target.files && event.target.files[0] && onFileSelect) {
      onFileSelect(event.target.files[0]);
    }
  };

  const isSelected = Boolean(fileName);

  return (
    <div
      className={`upload-card mb-3 ${className}`}
      onClick={handleCardClick}
      style={{ cursor: isUploading ? 'wait' : 'pointer' }}
    >
      <div
        className="upload-card-icon"
        style={isSelected || isUploading ? { color: 'var(--winarena-primary)', borderColor: 'var(--winarena-primary)' } : undefined}
      >
        {isUploading ? (
          <i className="fa-solid fa-circle-notch fa-spin"></i>
        ) : isSelected ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className={icon}></i>
        )}
      </div>

      <div className="upload-card-content text-start">
        <div className="upload-card-title">{title}</div>
        <UploadStatus
          isUploading={isUploading}
          fileName={fileName}
          defaultMessage={subtitle}
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="file-input-hidden"
        style={{ display: 'none' }}
        accept={accept}
        onChange={handleInputChange}
      />
    </div>
  );
}
