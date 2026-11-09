import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

/**
 * LoginEmployeePage component.
 * Internal Control Desk portal and authentication interface for KYC validators and auditors.
 *
 * @returns {JSX.Element} The rendered internal validator login page.
 */
export default function LoginEmployeePage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('emp90210@verify.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Submits employee credentials and navigates to the audit dashboard upon verification.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 700);
  };

  return (
    <div style={{ backgroundColor: '#090e17', color: '#ffffff', minHeight: '100vh' }}>
      
      {/* Backoffice Navbar */}
      <nav className="navbar navbar-expand-lg backoffice-nav py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" to="/login_employee">
            <img src="/img/logo.svg" alt="Digital Verify" width="24" height="32" />
            <span className="logo-text" style={{ fontSize: '20px', color: '#ffffff' }}>
              Digital Verify <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--winarena-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginLeft: '5px' }}>Backoffice</span>
            </span>
          </Link>
          
          <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#backofficeNav" style={{ outline: 'none', boxShadow: 'none' }}>
            <i className="fa-solid fa-bars fs-4"></i>
          </button>

          <div className="collapse navbar-collapse" id="backofficeNav">
            <div className="navbar-nav mx-auto">
              <a className="landing-nav-link" href="#" onClick={(e) => { e.preventDefault(); alert('Case Review desk active in dashboard.'); }}>Case Review</a>
              <a className="landing-nav-link" href="#" onClick={(e) => { e.preventDefault(); alert('Regulatory Compliance Coljuegos active.'); }}>Regulatory Compliance</a>
              <a className="landing-nav-link" href="#" onClick={(e) => { e.preventDefault(); alert('Technical Support 24/7 active.'); }}>Technical Support</a>
            </div>
            <div className="d-flex mt-3 mt-lg-0">
              <button className="backoffice-btn-primary" onClick={() => setModalOpen(true)}>Access the System</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backoffice Hero Section */}
      <section className="backoffice-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span style={{ backgroundColor: 'rgba(118, 51, 239, 0.1)', color: 'var(--winarena-primary)', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                Internal Control Desk
              </span>
              <h1 className="fw-bold text-white mb-3" style={{ fontSize: '42px', lineHeight: 1.2 }}>
                KYC Validation & Identity Audit Portal
              </h1>
              <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                Management and control of verification requests in real time. Ensure the safety of the gaming ecosystem through our automated audit and expert review desk.
              </p>
              <button className="backoffice-btn-primary px-4 py-3" onClick={() => setModalOpen(true)}>
                Check Waiting Queue <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <div className="col-lg-5">
              <div className="row g-3">
                <div className="col-6">
                  <div className="backoffice-stat-card">
                    <div className="backoffice-stat-number">12</div>
                    <div className="text-muted small">Pending Cases</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="backoffice-stat-card">
                    <div className="backoffice-stat-number">99.8%</div>
                    <div className="text-muted small">SLA Accuracy</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="backoffice-stat-card">
                    <div className="backoffice-stat-number">4 min</div>
                    <div className="text-muted small">Response Time</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="backoffice-stat-card">
                    <div className="backoffice-stat-number">24/7</div>
                    <div className="text-muted small">Active Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Features Section */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="landing-feature-card">
              <div className="landing-feature-icon" style={{ color: 'var(--winarena-primary)' }}><i className="fa-solid fa-folder-tree"></i></div>
              <h5 className="fw-bold text-white mb-2">Evidence Review</h5>
              <p className="text-muted small mb-0">Verification and visual inspection of proofs of address and identity documents of multiple formats (PDF, PNG, JPG).</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="landing-feature-card">
              <div className="landing-feature-icon" style={{ color: 'var(--winarena-primary)' }}><i className="fa-solid fa-clock-rotate-left"></i></div>
              <h5 className="fw-bold text-white mb-2">Audit History</h5>
              <p className="text-muted small mb-0">Complete traceability of actions and state changes by validators for regulatory audits.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="landing-feature-card">
              <div className="landing-feature-icon" style={{ color: 'var(--winarena-primary)' }}><i className="fa-solid fa-shield-halved"></i></div>
              <h5 className="fw-bold text-white mb-2">Fraud Detection</h5>
              <p className="text-muted small mb-0">Integrated alerts and escalation of suspicious cases to the level 2 fraud team for business protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-top border-secondary border-opacity-25 mt-5">
        <p className="text-muted small mb-0">&copy; 2026 Digital Verify. Corporate Employee Portal.</p>
      </footer>

      {/* EMPLOYEE LOGIN MODAL OVERLAY */}
      <div id="employeeLoginOverlay" className="vr-popup-overlay" style={{ display: modalOpen ? 'flex' : 'none', backgroundColor: 'rgba(9, 14, 23, 0.85)', backdropFilter: 'blur(5px)' }}>
        <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
          <div className="card-login position-relative">
            <button className="vr-close-btn" onClick={() => setModalOpen(false)}>&times;</button>
            
            <div className="card-brand-header">
              <div className="logo-container">
                <img src="/img/logo.svg" alt="Digital Verify" width="24" height="32" />
                <div className="logo-text" style={{ fontSize: '20px' }}>Digital Verify</div>
              </div>
            </div>
            
            <div className="text-center mb-4">
              <h6 className="fw-bold text-white mb-1">Control Desk</h6>
              <p className="text-muted small mb-0">Enter your validator credentials</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="form-label">Email:</div>
                <div className="input-group-custom">
                  <input
                    type="email"
                    className="form-control-custom"
                    id="employee_email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="form-label">Password:</div>
                <div className="input-group-custom">
                  <input
                    type="password"
                    className="form-control-custom"
                    id="emp_password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-login-submit w-100"
                disabled={isLoading}
                style={{ backgroundColor: 'var(--winarena-primary)', color: '#ffffff', boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)' }}
              >
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Accessing Control Desk...
                  </>
                ) : (
                  'Log in'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
