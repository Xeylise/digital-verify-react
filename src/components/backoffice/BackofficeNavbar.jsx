import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Bell, ChevronDown, LogOut, ExternalLink, Shield } from 'lucide-react';

export default function BackofficeNavbar({ toggleSidebar }) {
  const { operator, logoutOperator } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: '#070a14',
        borderBottom: '1px solid var(--border-color)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Digital Verify" width="24" height="28" />
          <span style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', letterSpacing: '0.4px' }}>
            Digital Verify
          </span>
          <span className="badge badge-purple" style={{ fontSize: 10, padding: '3px 8px' }}>
            Backoffice
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-4" style={{ marginLeft: 'auto' }}>
        {/* Link back to client portal */}
        <Link
          to="/"
          style={{
            fontSize: 12,
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          <ExternalLink size={13} />
          Portal Jugador
        </Link>

        {/* Notifications */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={18} color="var(--text-muted)" />
          <span
            style={{
              position: 'absolute',
              top: -4,
              right: -6,
              backgroundColor: '#EF4444',
              color: '#ffffff',
              borderRadius: 9999,
              fontSize: 9,
              fontWeight: 800,
              padding: '1px 5px'
            }}
          >
            3
          </span>
        </div>

        <div style={{ width: 1, height: 22, backgroundColor: 'var(--border-color)' }} />

        {/* Operator User Dropdown */}
        <div style={{ position: 'relative' }}>
          <div
            className="flex items-center gap-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: 6 }}
          >
            <img
              src={operator.avatar || '/img/employee_avatar.png'}
              alt={operator.name}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '1.5px solid var(--primary)',
                objectFit: 'cover'
              }}
            />
            <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>
                {operator.name}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                {operator.role}
              </div>
            </div>
            <ChevronDown size={14} color="var(--text-muted)" />
          </div>

          {dropdownOpen && (
            <div
              className="card-glass animate-fade-in"
              style={{
                position: 'absolute',
                right: 0,
                top: 44,
                width: 220,
                padding: '8px 0',
                zIndex: 200,
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ padding: '8px 16px', borderBottom: '1px solid var(--border-color)', marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', display: 'block' }}>
                  {operator.name}
                </span>
                <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                  @{operator.username} • {operator.badge}
                </span>
              </div>
              <button
                onClick={() => {
                  logoutOperator();
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-2"
                style={{
                  width: '100%',
                  padding: '8px 16px',
                  color: '#EF4444',
                  fontSize: 13,
                  fontWeight: 600
                }}
              >
                <LogOut size={14} />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
