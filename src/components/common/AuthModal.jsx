import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';

export default function AuthModal() {
  const { authModalMode, closeAuthModal, loginPlayer } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [activeTab, setActiveTab] = useState(authModalMode || 'login');

  if (!authModalMode) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginPlayer(email, password);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={closeAuthModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440, padding: 32 }}>
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          style={{ position: 'absolute', top: 20, right: 20, color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 12,
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <ShieldCheck size={26} color="#fff" />
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>
            {activeTab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
            Accede a WinArena y gestiona tu verificación KYC
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex"
          style={{
            background: 'var(--bg-dark)',
            borderRadius: 'var(--radius-md)',
            padding: 4,
            marginBottom: 20,
            border: '1px solid var(--border-color)'
          }}
        >
          <button
            onClick={() => setActiveTab('login')}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 13,
              color: activeTab === 'login' ? '#fff' : 'var(--text-muted)',
              backgroundColor: activeTab === 'login' ? 'var(--primary)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            Ingresar
          </button>
          <button
            onClick={() => setActiveTab('register')}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 13,
              color: activeTab === 'register' ? '#fff' : 'var(--text-muted)',
              backgroundColor: activeTab === 'register' ? 'var(--primary)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            Registrarse
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {activeTab === 'register' && (
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
                Nombre Completo
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  placeholder="Ej. Paola Castro"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: 38 }}
                />
                <User size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-dim)' }} />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
              Correo Electrónico
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                placeholder="usuario@winarena.gg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                style={{ paddingLeft: 38 }}
              />
              <Mail size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-dim)' }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6, display: 'block' }}>
              Contraseña
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                style={{ paddingLeft: 38 }}
              />
              <Lock size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-dim)' }} />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 10, padding: '12px' }}>
            {activeTab === 'login' ? 'Acceder al Portal' : 'Completar Registro'}
          </button>
        </form>
      </div>
    </div>
  );
}
