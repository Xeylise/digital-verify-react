import React, { useState } from 'react';
import InputField from '../common/InputField';
import FormButton from '../common/FormButton';

/**
 * LoginForm component.
 * Renders the user authentication form with email and password input fields.
 * Centralizes credentials collection, validation, and submission handling.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.initialEmail='pcastrosarabia@gmail.com'] - Initial email value for the input.
 * @param {string} [props.initialPassword='Sena2025**'] - Initial password value for the input.
 * @param {Function} props.onSubmit - Callback triggered with { email, password } on form submission.
 * @param {Function} [props.onForgotPassword] - Callback invoked when clicking the forgot password link.
 * @param {boolean} [props.isLoading=false] - Whether the form submission is in progress.
 * @param {string} [props.submitLabel='Log in'] - Button display text.
 * @returns {JSX.Element} The rendered login form element.
 */
export default function LoginForm({
  initialEmail = 'pcastrosarabia@gmail.com',
  initialPassword = 'Sena2025**',
  onSubmit,
  onForgotPassword,
  isLoading = false,
  submitLabel = 'Log in',
}) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles the login form submission.
   * Prevents default browser reload and triggers the onSubmit callback.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  /**
   * Toggles the visibility of the password input field.
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      {/* Email Field */}
      <InputField
        label="Email:"
        id="login_email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
      />

      {/* Password Field */}
      <div className="mb-3 text-start">
        <label htmlFor="login_password" className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--winarena-text-muted)' }}>
          Password:
        </label>
        <div className="input-group-custom position-relative">
          <input
            id="login_password"
            type={showPassword ? 'text' : 'password'}
            className="form-control-custom w-100"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            tabIndex="-1"
          >
            <i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}></i>
          </button>
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="text-start mb-3">
        <a
          href="#"
          className="forgot-password-link"
          onClick={(e) => {
            e.preventDefault();
            if (onForgotPassword) onForgotPassword();
          }}
        >
          Forgot your password?
        </a>
      </div>

      {/* Submit Button */}
      <FormButton
        type="submit"
        isLoading={isLoading}
        loadingText="Logging in..."
        className="w-100 py-3"
      >
        {submitLabel}
      </FormButton>
    </form>
  );
}
