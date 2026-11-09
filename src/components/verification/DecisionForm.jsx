import React, { useState } from 'react';
import ObservationField from './ObservationField';
import FormButton from '../common/FormButton';

/**
 * DecisionForm component.
 * Provides the verdict submission interface for audit cases (Approve, Reject, or Request Additional Docs).
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onSubmitDecision - Callback invoked with the decision payload.
 * @param {boolean} [props.isLoading=false] - Whether the verdict submission is in flight.
 * @param {boolean} [props.isFraudReview=false] - Whether specific account sanction options must be displayed.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered decision form.
 */
export default function DecisionForm({
  onSubmitDecision,
  isLoading = false,
  isFraudReview = false,
  className = '',
}) {
  const [decision, setDecision] = useState('approve');
  const [fraudAction, setFraudAction] = useState('reactivate');
  const [comments, setComments] = useState('');

  /**
   * Validates comments and triggers the decision submission payload.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmitDecision) {
      onSubmitDecision({
        decision,
        fraudAction: isFraudReview ? fraudAction : null,
        comments,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Primary Decision Options */}
      <div className="mb-4 text-start">
        <label className="form-label fw-bold text-white mb-2" style={{ fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)' }}>
          Select Decision
        </label>
        
        <div className="d-flex flex-column gap-2">
          <label
            className="p-3 rounded-3 d-flex align-items-center gap-3 cursor-pointer"
            style={{
              backgroundColor: decision === 'approve' ? 'rgba(34, 197, 94, 0.1)' : '#070a14',
              border: `1px solid ${decision === 'approve' ? '#22c55e' : 'var(--winarena-border)'}`,
              cursor: 'pointer'
            }}
          >
            <input
              type="radio"
              name="decisionRadio"
              value="approve"
              checked={decision === 'approve'}
              onChange={() => setDecision('approve')}
              className="form-check-input mt-0"
            />
            <div className="text-start">
              <span className="text-white fw-bold d-block small"><i className="fa-solid fa-check text-success me-1"></i> Approve Verification</span>
              <span className="text-muted" style={{ fontSize: '11px' }}>All documents match KYC and AML compliance standards.</span>
            </div>
          </label>

          <label
            className="p-3 rounded-3 d-flex align-items-center gap-3 cursor-pointer"
            style={{
              backgroundColor: decision === 'reject' ? 'rgba(239, 68, 68, 0.1)' : '#070a14',
              border: `1px solid ${decision === 'reject' ? '#ef4444' : 'var(--winarena-border)'}`,
              cursor: 'pointer'
            }}
          >
            <input
              type="radio"
              name="decisionRadio"
              value="reject"
              checked={decision === 'reject'}
              onChange={() => setDecision('reject')}
              className="form-check-input mt-0"
            />
            <div className="text-start">
              <span className="text-white fw-bold d-block small"><i className="fa-solid fa-xmark text-danger me-1"></i> Reject Case</span>
              <span className="text-muted" style={{ fontSize: '11px' }}>Fraudulent, expired or unreadable documents detected.</span>
            </div>
          </label>

          <label
            className="p-3 rounded-3 d-flex align-items-center gap-3 cursor-pointer"
            style={{
              backgroundColor: decision === 'additional_info' ? 'rgba(234, 179, 8, 0.1)' : '#070a14',
              border: `1px solid ${decision === 'additional_info' ? '#eab308' : 'var(--winarena-border)'}`,
              cursor: 'pointer'
            }}
          >
            <input
              type="radio"
              name="decisionRadio"
              value="additional_info"
              checked={decision === 'additional_info'}
              onChange={() => setDecision('additional_info')}
              className="form-check-input mt-0"
            />
            <div className="text-start">
              <span className="text-white fw-bold d-block small"><i className="fa-solid fa-arrow-rotate-right text-warning me-1"></i> Request Additional Documents</span>
              <span className="text-muted" style={{ fontSize: '11px' }}>Ask customer to re-upload clear proof of address or ID.</span>
            </div>
          </label>
        </div>
      </div>

      {/* Fraud Review Condition Card */}
      {isFraudReview && (
        <div className="p-3 rounded-4 mb-4 text-start" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <div className="fw-bold text-danger mb-3" style={{ fontSize: '12px' }}>
            <i className="fa-solid fa-triangle-exclamation me-1"></i> Because this case is Fraud Review
          </div>
          
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="fraudActionRadio"
              id="fRadio1"
              checked={fraudAction === 'reactivate'}
              onChange={() => setFraudAction('reactivate')}
            />
            <label className="form-check-label text-white small fw-bold" htmlFor="fRadio1">Reactivate Account</label>
            <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be reactivated and the user will be able to access the platform.</span>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="fraudActionRadio"
              id="fRadio2"
              checked={fraudAction === 'close'}
              onChange={() => setFraudAction('close')}
            />
            <label className="form-check-label text-white small fw-bold" htmlFor="fRadio2">Permanently Close Account</label>
            <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be permanently closed and the user will no longer have access.</span>
          </div>

          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="fraudActionRadio"
              id="fRadio3"
              checked={fraudAction === 'na'}
              onChange={() => setFraudAction('na')}
            />
            <label className="form-check-label text-white small fw-bold" htmlFor="fRadio3">Not Applicable (Requesting Additional Documents)</label>
            <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>Select this option if you are requesting more information or documents.</span>
          </div>
        </div>
      )}

      {/* Observation Field */}
      <ObservationField
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required={true}
      />

      {/* Submit Decision Button */}
      <FormButton
        type="submit"
        isLoading={isLoading}
        loadingText="Submitting Decision..."
        className="btn text-white w-100 py-3 rounded-pill fw-bold text-uppercase"
        style={{ backgroundColor: 'var(--winarena-primary)', border: 'none', fontSize: '12px', letterSpacing: '0.8px', boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)' }}
      >
        <i className="fa-regular fa-circle-check me-1"></i> Submit Decision
      </FormButton>
    </form>
  );
}
