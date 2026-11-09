import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordRecoveryForm from '../../components/auth/PasswordRecoveryForm';

/**
 * LandingPage component.
 * Public home page displaying esports promotions, hero banner, live game schedules,
 * and authentication modal dialogs (login, register, and password recovery).
 *
 * @returns {JSX.Element} The rendered public landing page.
 */
export default function LandingPage() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null); // 'login' | 'register' | 'recovery' | null
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [email, setEmail] = useState('pcastrosarabia@gmail.com');
  const [password, setPassword] = useState('Sena2025**');
  const [regEmail, setRegEmail] = useState('');
  const [regPasswordVal, setRegPasswordVal] = useState('');
  const [dob, setDob] = useState('');
  const [ageCheck, setAgeCheck] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  /**
   * Opens the specified authentication modal dialog.
   *
   * @param {('login'|'register'|'recovery')} modalType - Identifier of the modal to open.
   */
  const openModal = (modalType) => setActiveModal(modalType);

  /**
   * Closes active authentication modals if no async submission is pending.
   */
  const closeModals = () => {
    if (isLoggingIn || isRegistering) return;
    setActiveModal(null);
  };

  /**
   * Handles user login authentication with simulated network delay.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      navigate('/home');
    }, 700);
  };

  /**
   * Handles user registration with age check and simulated API call.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      navigate('/home');
    }, 800);
  };

  return (
    <div style={{ backgroundColor: 'var(--winarena-bg)', color: 'var(--winarena-text)', minHeight: '100vh' }}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg py-3" style={{ backgroundColor: 'rgba(4, 6, 11, 0.95)', borderBottom: '1px solid #141a29', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(8px)' }}>
        <div className="container">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <div style={{ fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, var(--winarena-primary), var(--winarena-accent))', padding: '4px 10px', borderRadius: '6px', fontSize: '20px', letterSpacing: '-1.5px', lineHeight: 1.2 }}>W</div>
            <div>
              <div className="fw-bold text-white lh-1" style={{ fontSize: '16px', letterSpacing: '0.5px' }}>WINARENA</div>
              <div className="text-uppercase" style={{ fontSize: '8px', color: 'var(--winarena-primary)', letterSpacing: '0.8px', fontWeight: 800 }}>Esports Betting</div>
            </div>
          </a>
          
          <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#winarenaNav" style={{ outline: 'none', boxShadow: 'none' }}>
            <i className="fa-solid fa-bars fs-4"></i>
          </button>

          <div className="collapse navbar-collapse" id="winarenaNav">
            <div className="navbar-nav mx-auto gap-2">
              <a className="nav-link-winarena active" href="#inicio">Home</a>
              <a className="nav-link-winarena" href="#esports">Esports</a>
              <a className="nav-link-winarena" href="#live">Live Betting</a>
              <a className="nav-link-winarena" href="#promotions">Promotions</a>
              <a className="nav-link-winarena" href="#news">News</a>
              <a className="nav-link-winarena" href="#help">Help</a>
            </div>
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <span className="text-muted small cursor-pointer" style={{ fontWeight: 600 }}>
                <i className="fa-solid fa-globe"></i> EN <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
              </span>
              <button className="btn btn-link text-white text-decoration-none px-3" onClick={() => openModal('login')} style={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Login
              </button>
              <button className="landing-btn-primary rounded-pill px-4 py-2" onClick={() => openModal('register')} style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-winarena">
        <div className="container">
          <div className="winarena-hero-grid">
            {/* Left Hero Text */}
            <div>
              <h1 style={{ fontSize: '54px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.5px' }}>
                BET ON THE ACTION.<br />
                <span style={{ color: 'var(--winarena-primary)' }}>WIN BIG.</span>
              </h1>
              <p style={{ color: 'var(--winarena-text-muted)', fontSize: '16px', marginBottom: '35px', maxWidth: '480px', lineHeight: 1.6 }}>
                The ultimate esports betting experience. Fast, secure, and made for real fans.
              </p>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <button className="landing-btn-primary rounded-pill px-4 py-3" onClick={() => openModal('register')}>
                  Join Now <i className="fa-solid fa-arrow-right ms-1"></i>
                </button>
                <a href="#esports" className="landing-btn-outline rounded-pill px-4 py-3 text-decoration-none d-flex align-items-center gap-2" style={{ marginLeft: 0 }}>
                  <i className="fa-solid fa-tower-broadcast text-danger"></i> View Live Matches
                </a>
              </div>
            </div>

            {/* Right Live Now Widget */}
            <div className="live-now-widget">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
                  Live Now
                </span>
                <span className="text-muted" style={{ fontSize: '11px' }}>12 Events</span>
              </div>

              {/* Row 1 */}
              <div className="live-event-row">
                <div className="small fw-bold text-white">G2 Esports <span className="text-muted" style={{ fontWeight: 400, fontSize: '11px' }}>vs</span> FaZe Clan</div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>1.65</span>
                  <span className="live-pill">Live</span>
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>2.25</span>
                </div>
              </div>
              {/* Row 2 */}
              <div className="live-event-row">
                <div className="small fw-bold text-white">Team Liquid <span className="text-muted" style={{ fontWeight: 400, fontSize: '11px' }}>vs</span> Natus Vincere</div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>1.80</span>
                  <span className="live-pill">Live</span>
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>1.95</span>
                </div>
              </div>
              {/* Row 3 */}
              <div className="live-event-row">
                <div className="small fw-bold text-white">Cloud9 <span className="text-muted" style={{ fontWeight: 400, fontSize: '11px' }}>vs</span> Vitality</div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>2.10</span>
                  <span className="live-pill">Live</span>
                  <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>1.70</span>
                </div>
              </div>

              <a href="#esports" className="text-decoration-none text-center d-block mt-3" style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                View All Live Events <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Bar */}
      <section className="container py-4 border-bottom" style={{ borderColor: '#141a29' }}>
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-bolt"></i></div>
              <div>
                <div className="fw-bold text-white" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fast Payouts</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Get your winnings fast with secure payouts.</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-shield-halved"></i></div>
              <div>
                <div className="fw-bold text-white" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Secure Platform</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Top-tier security to keep data & funds safe.</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-award"></i></div>
              <div>
                <div className="fw-bold text-white" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Best Odds</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Competitive odds across all major titles.</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex align-items-center gap-3">
              <div style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-headset"></i></div>
              <div>
                <div className="fw-bold text-white" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>24/7 Support</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Our support team is here for you, anytime.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Esports Grid */}
      <section id="esports" className="container py-5">
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '25px' }}>Popular Esports</h2>
        <div className="row g-3">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">Counter Strike 2</div>
              <div className="esports-pill-count">124 Events</div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">League of Legends</div>
              <div className="esports-pill-count">89 Events</div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">Dota 2</div>
              <div className="esports-pill-count">67 Events</div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">Valorant</div>
              <div className="esports-pill-count">54 Events</div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">Call of Duty</div>
              <div className="esports-pill-count">42 Events</div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="esports-pill-card">
              <div className="esports-pill-title">Rocket League</div>
              <div className="esports-pill-count">31 Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Footer */}
      <footer className="container py-5 border-top" style={{ borderColor: '#141a29' }}>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
          <div className="d-flex align-items-center gap-4 flex-wrap opacity-50">
            <span className="fw-bold text-white" style={{ fontSize: '20px' }}>VISA</span>
            <span className="fw-bold text-white" style={{ fontSize: '16px' }}>mastercard</span>
            <span className="fw-bold text-white" style={{ fontSize: '18px' }}>Trustly</span>
            <span className="fw-bold text-white" style={{ fontSize: '18px' }}>Skrill</span>
            <span className="fw-bold text-white" style={{ fontSize: '18px' }}>NETELLER</span>
            <span className="fw-bold text-white" style={{ fontSize: '18px' }}>PayPal</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span style={{ border: '1px solid #1f2a3f', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#8f9cae' }}>18+</span>
            <span className="text-muted" style={{ fontSize: '11px' }}>Play Responsibly | GambleAware</span>
          </div>
        </div>
      </footer>

      {/* MODAL OVERLAYS */}

      {/* LOGIN MODAL */}
      <div id="loginModalOverlay" className="vr-popup-overlay" style={{ display: activeModal === 'login' ? 'flex' : 'none' }}>
        <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
          <div className="card-login position-relative">
            {/* Close Button */}
            <button className="vr-close-btn" onClick={closeModals}>&times;</button>
            
            {/* Logo Header */}
            <div className="card-brand-header">
              <div className="logo-container">
                <div style={{ fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, var(--winarena-primary), var(--winarena-accent))', padding: '4px 10px', borderRadius: '6px', fontSize: '18px', letterSpacing: '-1.5px' }}>W</div>
                <div className="logo-text" style={{ fontSize: '20px' }}>WINARENA</div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="tabs-container">
              <button className="tab-btn active">Log in</button>
              <div className="tab-divider-text">with</div>
              <button className="tab-btn" onClick={() => openModal('register')}>Join</button>
            </div>

            {/* Social Logins */}
            <div className="social-container" style={{ gap: '5px' }}>
              <button className="social-icon-btn-raw" title="Twitch" type="button" onClick={() => navigate('/home')}>
                <img src="/img/twitch.svg" alt="Twitch" width="60" height="60" />
              </button>
              <button className="social-icon-btn-raw" title="Steam" type="button" onClick={() => navigate('/home')}>
                <img src="/img/steam.svg" alt="Steam" width="60" height="60" />
              </button>
              <button className="social-icon-btn-raw" title="Google" type="button" onClick={() => navigate('/home')}>
                <img src="/img/gmail.svg" alt="Google" width="60" height="60" />
              </button>
              <button className="social-icon-btn-raw" title="Telegram" type="button" onClick={() => navigate('/home')}>
                <img src="/img/telegram.svg" alt="Telegram" width="60" height="60" />
              </button>
            </div>

            {/* Separator */}
            <div className="or-separator">or</div>

            {/* Form */}
            <form onSubmit={handleLoginSubmit} id="loginForm">
              {/* Email Field */}
              <div className="mb-3">
                <div className="form-label">Email:</div>
                <div className="input-group-custom">
                  <input
                    type="email"
                    className="form-control-custom"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <div className="form-label">Password:</div>
                <div className="input-group-custom">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control-custom"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="password-toggle" id="togglePasswordBtn" onClick={() => setShowPassword(p => !p)}>
                    <i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} id="eyeIcon"></i>
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <a href="#" className="forgot-password-link" onClick={(e) => { e.preventDefault(); setActiveModal('recovery'); }}>Forgot your password?</a>

              {/* Submit Button */}
              <button type="submit" className="btn-login-submit" disabled={isLoggingIn}>
                {isLoggingIn ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Logging in...
                  </>
                ) : (
                  'Log in'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* REGISTER MODAL */}
      <div id="registerModalOverlay" className="vr-popup-overlay" style={{ display: activeModal === 'register' ? 'flex' : 'none' }}>
        <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
          <div className="card-login position-relative">
            {/* Close Button */}
            <button className="vr-close-btn" onClick={closeModals}>&times;</button>
            
            {/* Logo Header */}
            <div className="card-brand-header">
              <div className="logo-container">
                <div style={{ fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, var(--winarena-primary), var(--winarena-accent))', padding: '4px 10px', borderRadius: '6px', fontSize: '18px', letterSpacing: '-1.5px' }}>W</div>
                <div className="logo-text" style={{ fontSize: '20px' }}>WINARENA</div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="tabs-container">
              <button className="tab-btn" onClick={() => openModal('login')}>Log in</button>
              <div className="tab-divider-text">with</div>
              <button className="tab-btn active">Join</button>
            </div>

            {/* Form */}
            <form onSubmit={handleRegisterSubmit}>
              {/* Email Field */}
              <div className="mb-3">
                <div className="form-label">Email:</div>
                <div className="input-group-custom">
                  <input
                    type="email"
                    className="form-control-custom"
                    id="reg_email"
                    required
                    placeholder="example@email.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <div className="form-label">Password:</div>
                <div className="input-group-custom">
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    className="form-control-custom"
                    id="reg_password"
                    required
                    placeholder="Enter password"
                    value={regPasswordVal}
                    onChange={(e) => setRegPasswordVal(e.target.value)}
                  />
                  <button type="button" className="password-toggle" id="toggleRegPasswordBtn" onClick={() => setShowRegPassword(p => !p)}>
                    <i className={showRegPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} id="regEyeIcon"></i>
                  </button>
                </div>
              </div>

              {/* Date of Birth Field */}
              <div className="mb-3">
                <div className="form-label">Date of Birth:</div>
                <div className="input-group-custom">
                  <input
                    type="date"
                    className="form-control-custom"
                    id="dob"
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
              <div className="form-check mb-4 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ageCheck"
                  required
                  checked={ageCheck}
                  onChange={(e) => setAgeCheck(e.target.checked)}
                />
                <label className="form-check-label text-muted small" htmlFor="ageCheck" style={{ cursor: 'pointer', userSelect: 'none' }}>
                  I'm over 18 years old
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-login-submit" disabled={isRegistering}>
                {isRegistering ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Creating account...
                  </>
                ) : (
                  'Join'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* PASSWORD RECOVERY MODAL (RF001) */}
      <div id="recoveryModalOverlay" className="vr-popup-overlay" style={{ display: activeModal === 'recovery' ? 'flex' : 'none' }}>
        <div className="login-container animated-login-card" style={{ maxWidth: '440px', width: '100%' }}>
          <div className="card-login position-relative p-4">
            <button className="vr-close-btn" onClick={closeModals}>&times;</button>
            <PasswordRecoveryForm
              onBackToLogin={() => openModal('login')}
              onSubmit={(email) => {
                console.log('Recovery requested for:', email);
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
