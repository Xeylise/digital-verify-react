import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, User, LogOut, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function NavbarClient() {
  const { player, isPlayerLoggedIn, openLoginModal, openRegisterModal, logoutPlayer } = useAuth();
  const navigate = useNavigate();

  return (
    <header
      style={{
        backgroundColor: 'rgba(4, 6, 11, 0.95)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        padding: '14px 0'
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div
            style={{
              fontWeight: 900,
              color: '#ffffff',
              background: 'linear-gradient(135deg, var(--primary), #8B5CF6)',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '20px',
              letterSpacing: '-1.5px',
              lineHeight: 1.2
            }}
          >
            W
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '0.5px', color: '#ffffff', lineHeight: 1.1 }}>
              WINARENA
            </div>
            <div style={{ fontSize: 9, color: 'var(--primary-hover)', letterSpacing: '0.8px', fontWeight: 800, textTransform: 'uppercase' }}>
              Esports Betting & KYC
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6" style={{ fontSize: 14, fontWeight: 600 }}>
          <Link to="/" style={{ color: '#ffffff' }}>Inicio</Link>
          <Link to="/kyc/wizard" className="flex items-center gap-1" style={{ color: 'var(--primary-hover)' }}>
            <ShieldCheck size={16} />
            Verificación KYC
          </Link>
          <Link to="/kyc/status" style={{ color: 'var(--text-muted)' }}>
            Estado KYC
          </Link>
          <Link
            to="/admin/dashboard"
            style={{
              fontSize: 12,
              padding: '4px 10px',
              borderRadius: 6,
              background: 'rgba(118, 51, 239, 0.15)',
              border: '1px solid rgba(118, 51, 239, 0.3)',
              color: '#A855F7',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <LayoutDashboard size={13} />
            Ir a Mesa de Control (Backoffice)
          </Link>
        </nav>

        {/* Session Actions */}
        <div className="flex items-center gap-3">
          {isPlayerLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/kyc/wizard" className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>
                <ShieldCheck size={15} />
                Completar KYC
              </Link>

              <div
                className="flex items-center gap-2"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <img
                  src={player.avatar || '/img/user_avatar.jpg'}
                  alt={player.name}
                  style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>
                  {player.username}
                </div>
                <button
                  onClick={logoutPlayer}
                  title="Cerrar Sesión"
                  style={{ color: 'var(--text-muted)', marginLeft: 4 }}
                >
                  <LogOut size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={openLoginModal}
                style={{ color: '#ffffff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', padding: '8px 16px' }}
              >
                Iniciar Sesión
              </button>
              <button
                onClick={openRegisterModal}
                className="btn-primary"
                style={{ borderRadius: 9999, padding: '8px 20px', fontSize: 13, textTransform: 'uppercase' }}
              >
                Registrarse
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
