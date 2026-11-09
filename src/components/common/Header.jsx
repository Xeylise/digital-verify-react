import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Header component.
 * Top navigation bar supporting both player gaming environment and administrative audit desk.
 *
 * @param {Object} props - Component properties.
 * @param {('client'|'backoffice')} [props.mode='client'] - Application context mode.
 * @param {number} [props.unreadNotifications=1] - Count of unread notifications for badge.
 * @param {Function} [props.onOpenNotifications] - Handler for notification icon click.
 * @param {Function} [props.onOpenLogin] - Handler for login button.
 * @param {Function} [props.onOpenRegister] - Handler for join button.
 * @returns {JSX.Element} The rendered header bar.
 */
export default function Header({
  mode = 'client',
  unreadNotifications = 1,
  onOpenNotifications,
  onOpenLogin,
  onOpenRegister,
}) {
  const navigate = useNavigate();

  if (mode === 'backoffice') {
    return (
      <header className="backoffice-topbar d-flex justify-content-between align-items-center px-4 py-3" style={{ borderBottom: '1px solid var(--winarena-border)', backgroundColor: '#090e17' }}>
        <div className="d-flex align-items-center gap-3">
          <Link to="/dashboard" className="d-flex align-items-center gap-2 text-decoration-none">
            <img src="/img/logo.svg" alt="Digital Verify" width="22" height="28" />
            <span className="logo-text text-white fw-bold" style={{ fontSize: '18px' }}>
              Digital Verify <span style={{ fontSize: '10px', color: 'var(--winarena-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Backoffice</span>
            </span>
          </Link>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '11px', padding: '6px 12px' }}>
              <i className="fa-solid fa-circle me-1" style={{ fontSize: '7px' }}></i> Sistema Conectado
            </span>
          </div>
          <div className="d-flex align-items-center gap-2 border-start border-secondary border-opacity-25 ps-3">
            <div className="avatar-circle" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--winarena-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', color: '#ffffff' }}>
              PC
            </div>
            <div className="text-start d-none d-md-block">
              <div className="fw-bold text-white small lh-1">Paola Castro</div>
              <div className="text-muted" style={{ fontSize: '10px' }}>Analista KYC</div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="player-topbar py-3" style={{ borderBottom: '1px solid #141a29', backgroundColor: 'rgba(4, 6, 11, 0.95)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(8px)' }}>
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Link to="/home" className="d-flex align-items-center gap-2 text-decoration-none">
            <div style={{ fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, var(--winarena-primary), var(--winarena-accent))', padding: '4px 10px', borderRadius: '6px', fontSize: '18px', letterSpacing: '-1.5px', lineHeight: 1.2 }}>W</div>
            <div>
              <div className="fw-bold text-white lh-1" style={{ fontSize: '16px', letterSpacing: '0.5px' }}>WINARENA</div>
              <div className="text-uppercase" style={{ fontSize: '8px', color: 'var(--winarena-primary)', letterSpacing: '0.8px', fontWeight: 800 }}>Esports Betting</div>
            </div>
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          <Link to="/notifications" className="position-relative text-muted fs-5 cursor-pointer text-decoration-none">
            <i className="fa-regular fa-bell"></i>
            {unreadNotifications > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-dark rounded-circle" style={{ width: '8px', height: '8px' }}></span>
            )}
          </Link>
          <div className="d-flex align-items-center gap-2">
            <div className="avatar-circle" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--winarena-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', color: '#ffffff' }}>
              P
            </div>
            <div className="text-start d-none d-sm-block">
              <div className="fw-bold text-white small lh-1">Player9021</div>
              <div className="text-muted" style={{ fontSize: '10px' }}>Verified Tier 1</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
