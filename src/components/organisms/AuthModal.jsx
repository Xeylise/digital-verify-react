import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Lock, Mail, User, ShieldCheck } from 'lucide-react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

export default function AuthModal() {
  const { authModalMode, closeAuthModal, loginPlayer } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [activeTab, setActiveTab] = useState(authModalMode || 'login');
  const [error, setError] = useState('');

  if (!authModalMode) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor diligencie todos los campos obligatorios.');
      return;
    }
    setError('');
    loginPlayer(email, password);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={closeAuthModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440, padding: 32 }}>
        <button
          onClick={closeAuthModal}
          style={{ position: 'absolute', top: 20, right: 20, color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

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
            {activeTab === 'login' ? 'Iniciar Sesión (RF001)' : 'Crear Cuenta de Jugador'}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
            Acceso seguro a WinArena y verificación de identidad KYC
          </p>
        </div>

        {/* Tab switch */}
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
            onClick={() => { setActiveTab('login'); setError(''); }}
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
            onClick={() => { setActiveTab('register'); setError(''); }}
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

        <form onSubmit={handleSubmit} className="flex flex-col">
          {activeTab === 'register' && (
            <FormField
              label="Nombre Completo"
              required
              placeholder="Ej. Paola Castro"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={User}
            />
          )}

          <FormField
            label="Correo Electrónico"
            required
            type="email"
            placeholder="usuario@winarena.gg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={Mail}
          />

          <FormField
            label="Contraseña"
            required
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={Lock}
            error={error}
          />

          <Button type="submit" variant="primary" fullWidth style={{ marginTop: 8 }}>
            {activeTab === 'login' ? 'Acceder al Portal' : 'Completar Registro'}
          </Button>
        </form>
      </div>
    </div>
  );
}
