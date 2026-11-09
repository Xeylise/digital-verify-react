import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import NotificationDot from '../atoms/NotificationDot';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import AuthModal from '../organisms/AuthModal';
import NotificationsDrawer from '../organisms/NotificationsDrawer';
import { ShieldCheck, Bell, LayoutDashboard, LogOut, ArrowRight } from 'lucide-react';

export default function ClientLayout({ children }) {
  const { player, isPlayerLoggedIn, openLoginModal, openRegisterModal, logoutPlayer } = useAuth();
  const { unreadCount, openDrawer } = useNotifications();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
      {/* Top Navbar */}
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
          {/* Logo */}
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
                Esports Betting & Digital Verify
              </div>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6" style={{ fontSize: 14, fontWeight: 600 }}>
            <Link to="/" style={{ color: '#ffffff' }}>Inicio</Link>
            <Link to="/kyc/wizard" className="flex items-center gap-1" style={{ color: 'var(--primary-hover)' }}>
              <ShieldCheck size={16} />
              Verificación KYC (RF002)
            </Link>
            <Link to="/kyc/status" style={{ color: 'var(--text-muted)' }}>
              Estado & Ciclo de Vida (RF005)
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
              Mesa de Control Backoffice
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications Bell (RF006) */}
            <div
              onClick={openDrawer}
              style={{ position: 'relative', cursor: 'pointer', padding: 8 }}
              title="Notificaciones (RF006)"
            >
              <Bell size={19} color={unreadCount > 0 ? '#A855F7' : 'var(--text-muted)'} />
              <NotificationDot count={unreadCount} />
            </div>

            {isPlayerLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link to="/kyc/wizard">
                  <Button variant="primary" size="sm" icon={ShieldCheck}>
                    Completar KYC
                  </Button>
                </Link>

                <div
                  className="flex items-center gap-2"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <Avatar src={player.avatar} alt={player.name} size={28} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{player.username}</span>
                  <button onClick={logoutPlayer} title="Cerrar Sesión" style={{ color: 'var(--text-muted)', marginLeft: 4 }}>
                    <LogOut size={13} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={openLoginModal}>
                  Iniciar Sesión
                </Button>
                <Button variant="primary" size="sm" onClick={openRegisterModal}>
                  Registrarse
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* Public Footer */}
      <footer style={{ backgroundColor: '#04060b', borderTop: '1px solid var(--border-color)', padding: '36px 0', marginTop: 'auto' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              © 2026 WinArena & Digital Verify. Arquitectura Atómica React • Requisitos RF001-RF006.
            </span>
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            Digital Identity Verification & Gaming Compliance Platform
          </span>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <AuthModal />
      <NotificationsDrawer />
    </div>
  );
}
