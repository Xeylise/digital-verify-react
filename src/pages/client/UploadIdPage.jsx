import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * UploadIdPage component.
 * KYC identity document upload view. Allows the player to capture or upload
 * clear photographs of the front and reverse sides of their official identification.
 *
 * @returns {JSX.Element} The rendered ID document upload page.
 */
export default function UploadIdPage() {
  const navigate = useNavigate();
  const [frontFileName, setFrontFileName] = useState('');
  const [backFileName, setBackFileName] = useState('');
  const [uploadingFront, setUploadingFront] = useState(false);
  const [uploadingBack, setUploadingBack] = useState(false);

  const fileFrontRef = useRef(null);
  const fileBackRef = useRef(null);

  /**
   * Processes the selection of the front ID document with simulated scanning latency.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileName = event.target.files[0].name;
      const formattedName = fileName.length > 25 ? fileName.substring(0, 22) + '...' : fileName;
      setUploadingFront(true);
      setTimeout(() => {
        setFrontFileName(formattedName);
        setUploadingFront(false);
      }, 650);
    }
  };

  /**
   * Processes the selection of the reverse ID document with simulated scanning latency.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileName = event.target.files[0].name;
      const formattedName = fileName.length > 25 ? fileName.substring(0, 22) + '...' : fileName;
      setUploadingBack(true);
      setTimeout(() => {
        setBackFileName(formattedName);
        setUploadingBack(false);
      }, 650);
    }
  };

  return (
    <div className="kyc-wrapper text-center">
      <div className="kyc-icon-frame">
        <i className="fa-solid fa-expand"></i>
      </div>
      
      <h1 className="kyc-title">Upload your ID</h1>
      <p className="kyc-subtitle">Take a clear photo of your ID document<br />so we can verify your identity.</p>
      
      {/* Front Card */}
      <div
        className="upload-card mb-3"
        onClick={() => !uploadingFront && fileFrontRef.current?.click()}
        style={{ cursor: uploadingFront ? 'wait' : 'pointer' }}
      >
        <div
          className="upload-card-icon"
          id="iconFront"
          style={frontFileName || uploadingFront ? { color: 'var(--winarena-primary)', borderColor: 'var(--winarena-primary)' } : undefined}
        >
          {uploadingFront ? (
            <i className="fa-solid fa-circle-notch fa-spin"></i>
          ) : frontFileName ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-regular fa-address-card"></i>
          )}
        </div>
        <div className="upload-card-content">
          <div className="upload-card-title">Front of your ID</div>
          <div
            className="upload-card-subtitle"
            id="labelFront"
            style={frontFileName || uploadingFront ? { color: 'var(--winarena-primary)' } : undefined}
          >
            {uploadingFront
              ? 'Scanning and uploading document...'
              : frontFileName
              ? `Selected: ${frontFileName}`
              : 'Make sure all details are clearly visible.'}
          </div>
        </div>
        <input
          type="file"
          ref={fileFrontRef}
          id="fileFront"
          className="file-input-hidden"
          style={{ display: 'none' }}
          onChange={handleFrontChange}
        />
      </div>

      {/* Back Card */}
      <div
        className="upload-card mb-4"
        onClick={() => !uploadingBack && fileBackRef.current?.click()}
        style={{ cursor: uploadingBack ? 'wait' : 'pointer' }}
      >
        <div
          className="upload-card-icon"
          id="iconBack"
          style={backFileName || uploadingBack ? { color: 'var(--winarena-primary)', borderColor: 'var(--winarena-primary)' } : undefined}
        >
          {uploadingBack ? (
            <i className="fa-solid fa-circle-notch fa-spin"></i>
          ) : backFileName ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-credit-card"></i>
          )}
        </div>
        <div className="upload-card-content">
          <div className="upload-card-title">Back of your ID</div>
          <div
            className="upload-card-subtitle"
            id="labelBack"
            style={backFileName || uploadingBack ? { color: 'var(--winarena-primary)' } : undefined}
          >
            {uploadingBack
              ? 'Scanning and uploading document...'
              : backFileName
              ? `Selected: ${backFileName}`
              : 'Make sure all details are clearly visible.'}
          </div>
        </div>
        <input
          type="file"
          ref={fileBackRef}
          id="fileBack"
          className="file-input-hidden"
          style={{ display: 'none' }}
          onChange={handleBackChange}
        />
      </div>

      <div className="w-100 text-center mt-3">
        <Link
          to="/proof_of_address"
          className={`btn-kyc-primary w-75 py-3 text-center text-decoration-none d-inline-block ${uploadingFront || uploadingBack ? 'disabled opacity-50' : ''}`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
