import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KYCConfirmation from '../../components/kyc/KYCConfirmation';

/**
 * ProofOfAddressPage component.
 * Final document collection step in the KYC onboarding workflow.
 * Allows users to upload utility bills, bank statements, or loan documents issued within 60 days.
 *
 * @returns {JSX.Element} The rendered proof of address page with confirmation modal.
 */
export default function ProofOfAddressPage() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const [uploadingAddress, setUploadingAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const fileAddressRef = useRef(null);

  /**
   * Processes the selection of the utility bill or address verification document.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0].name;
      const formattedName = selectedFile.length > 25 ? selectedFile.substring(0, 22) + '...' : selectedFile;
      setUploadingAddress(true);
      setTimeout(() => {
        setFileName(formattedName);
        setUploadingAddress(false);
      }, 650);
    }
  };

  /**
   * Submits the complete KYC application for backoffice review with simulated API latency.
   */
  const handleSendForReview = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 900);
  };

  return (
    <>
      <div className="kyc-wrapper text-center">
        <div className="kyc-icon-frame">
          <i className="fa-solid fa-file-invoice"></i>
        </div>
        
        <h1 className="kyc-title">Proof of address</h1>
        <p className="kyc-subtitle">Upload a document that shows your full name<br />and current address in last 60 days.</p>
        
        {/* Upload Card */}
        <div
          className="upload-card mb-4"
          onClick={() => !uploadingAddress && fileAddressRef.current?.click()}
          style={{ cursor: uploadingAddress ? 'wait' : 'pointer' }}
        >
          <div
            className="upload-card-icon"
            id="iconAddress"
            style={fileName || uploadingAddress ? { color: 'var(--winarena-primary)', borderColor: 'var(--winarena-primary)' } : undefined}
          >
            {uploadingAddress ? (
              <i className="fa-solid fa-circle-notch fa-spin"></i>
            ) : fileName ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i className="fa-solid fa-file-arrow-up"></i>
            )}
          </div>
          <div className="upload-card-content">
            <div className="upload-card-title">Upload your proof of address</div>
            <div
              className="upload-card-subtitle"
              id="labelAddress"
              style={fileName || uploadingAddress ? { color: 'var(--winarena-primary)' } : undefined}
            >
              {uploadingAddress
                ? 'Scanning and uploading document...'
                : fileName
                ? `Selected: ${fileName}`
                : 'Accepted formats: bank statement, utility bill, student loan statement.'}
            </div>
          </div>
          <input
            type="file"
            ref={fileAddressRef}
            id="fileAddress"
            className="file-input-hidden"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="w-100 text-center mt-3">
          <button
            type="button"
            className="btn-kyc-primary w-75 py-3 text-center border-0"
            onClick={handleSendForReview}
            disabled={isSubmitting || uploadingAddress}
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Submitting documents...
              </>
            ) : (
              'Send for review'
            )}
          </button>
        </div>
      </div>

      {/* SUCCESS SUBMIT MODAL (RF002 KYCConfirmation) */}
      <KYCConfirmation
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
