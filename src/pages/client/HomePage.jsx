import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className="container-fluid p-0" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Welcome Label */}
        <div className="mb-4">
          <span className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>Welcome back!</span>
        </div>

        {/* Top Row: Profile Details & 3 Quick Action Category cards */}
        <div className="row g-3 mb-4">
          {/* Profile Rank Details Card */}
          <div className="col-lg-6">
            <div className="profile-rewards-card">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar-circle" style={{ width: '56px', height: '56px', border: '2px solid var(--winarena-primary)' }}>
                    <img src="/img/user_avatar.jpg" alt="User Avatar" className="avatar-image" />
                  </div>
                  <div>
                    <h5 className="fw-bold text-white mb-1" style={{ fontSize: '16px' }}>psarabia0190</h5>
                    <span className="text-muted small d-block">Rank: <span className="text-white fw-bold">Unranked</span></span>
                  </div>
                </div>
                <a href="#" className="text-decoration-none text-muted small fw-bold" onClick={(e) => { e.preventDefault(); alert('Rewards section under development.'); }}>
                  Go to Rewards <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
                </a>
              </div>

              {/* Progress Bar */}
              <div className="rewards-progress-bar">
                <div className="rewards-progress-fill"></div>
                <div className="rewards-progress-badge"><i className="fa-solid fa-shield-halved"></i></div>
              </div>
              <span className="text-muted small d-block mt-2" style={{ fontSize: '11px' }}>0.00%</span>
            </div>
          </div>

          {/* Esports Box */}
          <div className="col-4 col-lg-2">
            <div className="category-box">
              <div className="category-icon"><i className="fa-solid fa-desktop"></i></div>
              <h6 className="category-title">Esports</h6>
            </div>
          </div>
          {/* Sports Box */}
          <div className="col-4 col-lg-2">
            <div className="category-box">
              <div className="category-icon"><i className="fa-solid fa-basketball"></i></div>
              <h6 className="category-title">Sports</h6>
            </div>
          </div>
          {/* Casino Box */}
          <div className="col-4 col-lg-2">
            <div className="category-box">
              <div className="category-icon"><i className="fa-solid fa-dice"></i></div>
              <h6 className="category-title">Casino</h6>
            </div>
          </div>
        </div>

        {/* KYC Banner Notification */}
        <div className="alert border-0 rounded-4 p-4 mb-4 text-white d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ border: '1px solid var(--winarena-border) !important', backgroundColor: 'var(--winarena-card-bg) !important' }}>
          <div className="d-flex align-items-start gap-3">
            <div style={{ fontSize: '24px', color: 'var(--winarena-primary)', marginTop: '2px' }}><i className="fa-solid fa-circle-exclamation"></i></div>
            <div>
              <h5 className="fw-bold mb-1">Complete your KYC verification</h5>
              <p className="mb-0 text-muted small" style={{ maxWidth: '580px' }}>Validate your identity quickly to withdraw your winnings securely and without withdrawal limits.</p>
            </div>
          </div>
          <Link to="/start_kyc" className="btn text-white btn-sm px-4 py-2 rounded-pill fw-bold text-uppercase" style={{ backgroundColor: 'var(--winarena-primary)', fontSize: '12px', letterSpacing: '0.5px' }}>
            Start KYC
          </Link>
        </div>

        {/* Match List Heading */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <span style={{ fontSize: '20px', color: '#ffffff' }}><i className="fa-solid fa-desktop"></i></span>
          <h3 className="fw-bold text-white mb-0" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Esports (354)</h3>
        </div>

        {/* Match Rows List */}
        <div className="match-list-container">
          
          {/* Match Row 1 (Locked Odds) */}
          <div className="match-row-card">
            <div className="match-details">
              <span style={{ color: '#ef4444', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>CoD</span>
              <span className="text-muted small ms-1" style={{ fontSize: '10px' }}>BO9 | 58:50</span>
              <div className="text-muted small text-truncate" style={{ fontSize: '11px', marginTop: '2px' }}>Call of Duty League Champions...</div>
            </div>
            
            <div className="match-teams-area">
              <div className="match-team team-right">
                <span>FaZe Vegas</span>
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="odds-lock-btn"><i className="fa-solid fa-lock"></i></div>
                <span className="text-muted small mx-1" style={{ fontSize: '10px' }}>VS</span>
                <div className="odds-lock-btn"><i className="fa-solid fa-lock"></i></div>
              </div>
              <div className="match-team">
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
                <span>OpTic Texas</span>
              </div>
            </div>

            <div className="match-actions-area">
              <span className="text-muted small"><i className="fa-solid fa-video"></i></span>
              <span style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700 }}>+3</span>
            </div>
          </div>

          {/* Match Row 2 */}
          <div className="match-row-card">
            <div className="match-details">
              <span style={{ color: '#00d2ff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>LoL</span>
              <span className="text-muted small ms-1" style={{ fontSize: '10px' }}>BO1 | Jul 20, 02:30</span>
              <div className="text-muted small text-truncate" style={{ fontSize: '11px', marginTop: '2px' }}>KeSPA Cup 2026</div>
            </div>
            
            <div className="match-teams-area">
              <div className="match-team team-right">
                <span>Nongshim RedForce</span>
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="odds-button-winarena">2.67</div>
                <span className="text-muted small mx-1" style={{ fontSize: '10px' }}>VS</span>
                <div className="odds-button-winarena">1.43</div>
              </div>
              <div className="match-team">
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
                <span>KT Rolster</span>
              </div>
            </div>

            <div className="match-actions-area">
              <span className="live-pill">Live</span>
              <span style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700 }}>+58</span>
            </div>
          </div>

          {/* Match Row 3 */}
          <div className="match-row-card">
            <div className="match-details">
              <span style={{ color: '#a855f7', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>VAL</span>
              <span className="text-muted small ms-1" style={{ fontSize: '10px' }}>BO3 | Jul 20, 04:00</span>
              <div className="text-muted small text-truncate" style={{ fontSize: '11px', marginTop: '2px' }}>VCT 2026: China Stage 2</div>
            </div>
            
            <div className="match-teams-area">
              <div className="match-team team-right">
                <span>Titan Esports Club</span>
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="odds-button-winarena">2.96</div>
                <span className="text-muted small mx-1" style={{ fontSize: '10px' }}>VS</span>
                <div className="odds-button-winarena">1.37</div>
              </div>
              <div className="match-team">
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
                <span>All Gamers</span>
              </div>
            </div>

            <div className="match-actions-area">
              <span className="live-pill">Live</span>
              <span style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700 }}>+282</span>
            </div>
          </div>

          {/* Match Row 4 */}
          <div className="match-row-card">
            <div className="match-details">
              <span style={{ color: '#00d2ff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>LoL</span>
              <span className="text-muted small ms-1" style={{ fontSize: '10px' }}>BO1 | Jul 20, 06:15</span>
              <div className="text-muted small text-truncate" style={{ fontSize: '11px', marginTop: '2px' }}>KeSPA Cup 2026</div>
            </div>
            
            <div className="match-teams-area">
              <div className="match-team team-right">
                <span>Nongshim RedForce</span>
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="odds-button-winarena">2.16</div>
                <span className="text-muted small mx-1" style={{ fontSize: '10px' }}>VS</span>
                <div className="odds-button-winarena">1.63</div>
              </div>
              <div className="match-team">
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
                <span>FearX</span>
              </div>
            </div>

            <div className="match-actions-area">
              <span className="live-pill">Live</span>
              <span style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700 }}>+60</span>
            </div>
          </div>

          {/* Match Row 5 */}
          <div className="match-row-card">
            <div className="match-details">
              <span style={{ color: '#a855f7', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>VAL</span>
              <span className="text-muted small ms-1" style={{ fontSize: '10px' }}>BO3 | Jul 20, 07:00</span>
              <div className="text-muted small text-truncate" style={{ fontSize: '11px', marginTop: '2px' }}>VCT 2026: China Stage 2</div>
            </div>
            
            <div className="match-teams-area">
              <div className="match-team team-right">
                <span>Bilibili Gaming</span>
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <div className="odds-button-winarena">2.55</div>
                <span className="text-muted small mx-1" style={{ fontSize: '10px' }}>VS</span>
                <div className="odds-button-winarena">1.47</div>
              </div>
              <div className="match-team">
                <span className="text-muted"><i className="fa-solid fa-shield-halved"></i></span>
                <span>XLG Esports</span>
              </div>
            </div>

            <div className="match-actions-area">
              <span className="live-pill">Live</span>
              <span style={{ color: 'var(--winarena-primary)', fontSize: '11px', fontWeight: 700 }}>+225</span>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Help Chat Widget */}
      <div className="floating-chat-widget" onClick={() => alert('Live Customer Support Center.')}>
        <i className="fa-solid fa-headset"></i>
      </div>
    </>
  );
}
