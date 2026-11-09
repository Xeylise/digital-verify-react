import React, { useState } from 'react';
import InputField from '../common/InputField';
import FormButton from '../common/FormButton';

/**
 * RegisterForm component.
 * Manages user registration input fields, legal age validation, and account creation payload.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onSubmit - Callback function triggered upon valid form submission.
 * @param {boolean} [props.isLoading=false] - Indicates if the registration process is underway.
 * @param {string} [props.submitLabel='Join'] - Action button text.
 * @returns {JSX.Element} The rendered registration form element.
 */
export default function RegisterForm({
  onSubmit,
  isLoading = false,
  submitLabel = 'Join',
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dob, setDob] = useState('');
  const [ageCheck, setAgeCheck] = useState(false);

  /**
   * Validates form criteria and invokes the submission callback.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ageCheck) {
      alert('Debes confirmar que eres mayor de 18 años para registrarte.');
      return;
    }
    if (onSubmit) {
      onSubmit({ email, password, dob, ageCheck });
    }
  };

  /**
   * Toggles the display state of the password field.
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      {/* Email Field */}
      <InputField
        label="Email:"
        id="reg_email"
        type="email"
        required
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Field */}
      <div className="mb-3 text-start">
        <label htmlFor="reg_password" className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--winarena-text-muted)' }}>
          Password:
        </label>
        <div className="input-group-custom position-relative">
          <input
            id="reg_password"
            type={showPassword ? 'text' : 'password'}
            className="form-control-custom w-100"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

      {/* Date of Birth Field */}
      <div className="mb-3 text-start">
        <label htmlFor="reg_dob" className="form-label" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--winarena-text-muted)' }}>
          Date of Birth:
        </label>
        <div className="input-group-custom position-relative">
          <input
            id="reg_dob"
            type="date"
            className="form-control-custom w-100"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <div className="calendar-icon-btn">
            <i className="fa-regular fa-calendar-days"></i>
          </div>
        </div>
      </div>

      {/* Age Checkbox */}
      <div className="form-check mb-4 mt-2 text-start">
        <input
          className="form-check-input"
          type="checkbox"
          id="reg_ageCheck"
          required
          checked={ageCheck}
          onChange={(e) => setAgeCheck(e.target.checked)}
        />
        <label className="form-check-label text-muted small" htmlFor="reg_ageCheck" style={{ cursor: 'pointer', userSelect: 'none' }}>
          I'm over 18 years old
        </label>
      </div>

      {/* Submit Button */}
      <FormButton
        type="submit"
        isLoading={isLoading}
        loadingText="Creating account..."
        className="w-100 py-3"
      >
        {submitLabel}
      </FormButton>
    </form>
  );
}
