import React, { useState } from 'react';
import InputField from '../common/InputField';
import FormButton from '../common/FormButton';
import AlertMessage from '../common/AlertMessage';

/**
 * PasswordRecoveryForm component.
 * Provides the user interface for initiating an account password reset email.
 *
 * @param {Object} props - Component properties.
 * @param {Function} [props.onSubmit] - Callback triggered with the target email string.
 * @param {Function} [props.onBackToLogin] - Handler to navigate back to the primary login view.
 * @param {boolean} [props.isLoading=false] - Whether the recovery dispatch request is active.
 * @returns {JSX.Element} The rendered recovery form component.
 */
export default function PasswordRecoveryForm({
  onSubmit,
  onBackToLogin,
  isLoading = false,
}) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  /**
   * Processes the password reset submission and updates internal UI state.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setIsSent(true);
  };

  return (
    <div className="w-100">
      <div className="text-center mb-4">
        <h5 className="fw-bold text-white mb-2">Password Recovery</h5>
        <p className="text-muted small">
          Enter your registered email address and we will send you instructions to reset your password.
        </p>
      </div>

      {isSent ? (
        <div className="text-center">
          <AlertMessage
            type="success"
            title="Recovery Email Sent"
            message={`We've dispatched password reset instructions to ${email}. Check your inbox.`}
          />
          <button
            type="button"
            className="landing-btn-outline w-100 py-2 mt-3 rounded-pill"
            onClick={onBackToLogin}
          >
            Back to Log in
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Registered Email:"
            id="recovery_email"
            type="email"
            required
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormButton
            type="submit"
            isLoading={isLoading}
            loadingText="Sending link..."
            className="w-100 py-3 mt-3"
          >
            Send Recovery Link
          </FormButton>

          {onBackToLogin && (
            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link text-muted small text-decoration-none"
                onClick={onBackToLogin}
              >
                <i className="fa-solid fa-arrow-left me-1"></i> Return to login
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
